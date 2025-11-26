<?php

namespace App\Command;

use App\Repository\UserRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:test-user-login',
    description: 'Test if a user can authenticate with given username and password',
)]
class TestUserLoginCommand extends Command
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly UserPasswordHasherInterface $passwordHasher,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('username', InputArgument::REQUIRED, 'Username to test')
            ->addArgument('password', InputArgument::REQUIRED, 'Password to test');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $username = $input->getArgument('username');
        $password = $input->getArgument('password');

        $user = $this->userRepository->findOneBy(['username' => $username]);

        if (!$user) {
            $io->error("User with username '{$username}' not found!");
            return Command::FAILURE;
        }

        $io->info("User found: ID {$user->getId()}");
        $io->table(
            ['Property', 'Value'],
            [
                ['Username', $user->getUsername()],
                ['Email', $user->getEmail()],
                ['Role', $user->getRole() ? $user->getRole()->getName() : 'NULL'],
                ['Has Password', $user->getPassword() ? 'Yes' : 'No'],
                ['Password Hash', substr($user->getPassword(), 0, 20) . '...'],
            ]
        );

        if (!$user->getRole()) {
            $io->error('User has no role assigned! This will prevent login.');
            return Command::FAILURE;
        }

        $roles = $user->getRoles();
        $io->info('User roles: ' . implode(', ', $roles));

        if (empty($roles)) {
            $io->error('User has no roles! This will prevent login.');
            return Command::FAILURE;
        }

        $isValid = $this->passwordHasher->isPasswordValid($user, $password);
        
        if ($isValid) {
            $io->success('Password is VALID! User should be able to login.');
        } else {
            $io->error('Password is INVALID! User cannot login with this password.');
        }

        return $isValid ? Command::SUCCESS : Command::FAILURE;
    }
}

