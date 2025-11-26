<?php

namespace App\Command;

use App\Entity\Role;
use App\Repository\RoleRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:fix-user-roles',
    description: 'Fixes users with NULL roles by assigning ROLE_MANAGER or ROLE_MEMBER',
)]
class FixUserRolesCommand extends Command
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly UserRepository $userRepository,
        private readonly RoleRepository $roleRepository,
    ) {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Find users with NULL roles
        $users = $this->userRepository->createQueryBuilder('u')
            ->where('u.role IS NULL')
            ->getQuery()
            ->getResult();

        if (empty($users)) {
            $io->success('No users with NULL roles found.');
            return Command::SUCCESS;
        }

        // Try to find ROLE_MANAGER first, then ROLE_MEMBER
        $role = $this->roleRepository->findOneBy(['name' => 'ROLE_MANAGER']);
        if (!$role) {
            $role = $this->roleRepository->findOneBy(['name' => 'ROLE_MEMBER']);
        }
        
        // If still no role, create ROLE_MANAGER
        if (!$role) {
            $io->warning('No roles found. Creating ROLE_MANAGER...');
            $role = new Role();
            $role->setName('ROLE_MANAGER');
            $role->setIsSelectable(true);
            $role->setTaskCalculationActive(false);
            $role->setTaskCalculationActiveCrm(true);
            $this->entityManager->persist($role);
            $this->entityManager->flush();
            $io->info('Created ROLE_MANAGER');
        }

        $fixed = 0;
        foreach ($users as $user) {
            $user->setRole($role);
            $fixed++;
        }

        $this->entityManager->flush();

        $io->success(sprintf('Fixed %d user(s) by assigning role: %s', $fixed, $role->getName()));

        return Command::SUCCESS;
    }
}

