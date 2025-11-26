<?php

namespace App\Command;

use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:reset-user-password',
    description: 'Reset a user\'s password',
)]
class ResetUserPasswordCommand extends Command
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly EntityManagerInterface $entityManager,
    ) {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->addArgument('username', InputArgument::REQUIRED, 'Username')
            ->addOption('password', 'p', InputOption::VALUE_OPTIONAL, 'New password (will prompt if not provided)');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $username = $input->getArgument('username');

        $user = $this->userRepository->findOneBy(['username' => $username]);

        if (!$user) {
            $io->error("User with username '{$username}' not found!");
            return Command::FAILURE;
        }

        $password = $input->getOption('password');
        if (!$password) {
            $password = $io->askHidden('Enter new password');
            if (!$password) {
                $io->error('Password is required!');
                return Command::FAILURE;
            }
        }

        // Hash and set password
        $hashedPassword = $this->passwordHasher->hashPassword($user, $password);
        $user->setPassword($hashedPassword);

        $this->entityManager->flush();

        $io->success("Password reset successfully for user '{$username}'!");
        $io->table(
            ['Property', 'Value'],
            [
                ['Username', $user->getUsername()],
                ['Email', $user->getEmail()],
                ['Role', $user->getRole() ? $user->getRole()->getName() : 'NULL'],
                ['New Password', str_repeat('*', strlen($password))],
            ]
        );

        return Command::SUCCESS;
    }
}

