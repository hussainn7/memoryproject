<?php

namespace App\Command;

use App\Entity\Role;
use App\Entity\User;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:create-admin-user',
    description: 'Creates an admin user with username "admin" and password "admin123"',
)]
class CreateAdminUserCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly UserRepository $userRepository,
        private readonly RoleRepository $roleRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Check if admin user already exists
        $existingUser = $this->userRepository->findOneBy(['username' => 'admin']);
        if ($existingUser) {
            $io->warning('Admin user with username "admin" already exists.');
            return Command::SUCCESS;
        }

        // Find or create ROLE_ADMIN
        $adminRole = $this->roleRepository->findOneBy(['name' => 'ROLE_ADMIN']);
        if (!$adminRole) {
            $io->error('ROLE_ADMIN not found in database. Please create it first.');
            return Command::FAILURE;
        }

        // Create admin user
        $admin = new User();
        $admin->setUsername('admin');
        $admin->setEmail('admin@admin.local');
        $admin->setFirstName('Admin');
        $admin->setLastName('User');
        $admin->setRole($adminRole);
        $admin->setUuid(Uuid::uuid4()->toString());
        
        // Hash password
        $hashedPassword = $this->passwordHasher->hashPassword($admin, 'admin123');
        $admin->setPassword($hashedPassword);

        $this->entityManager->persist($admin);
        $this->entityManager->flush();

        $io->success('Admin user created successfully!');
        $io->table(
            ['Property', 'Value'],
            [
                ['Username', 'admin'],
                ['Password', 'admin123'],
                ['Email', 'admin@admin.local'],
                ['Role', 'ROLE_ADMIN'],
            ]
        );

        return Command::SUCCESS;
    }
}

