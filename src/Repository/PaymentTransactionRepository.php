<?php

namespace App\Repository;

use App\Entity\PaymentTransaction;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\DBAL\Exception\TableNotFoundException;

/**
 * @extends ServiceEntityRepository<PaymentTransaction>
 *
 * @method PaymentTransaction|null find($id, $lockMode = null, $lockVersion = null)
 * @method PaymentTransaction|null findOneBy(array $criteria, array $orderBy = null)
 * @method PaymentTransaction[]    findAll()
 * @method PaymentTransaction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PaymentTransactionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, PaymentTransaction::class);
    }

    /**
     * @return PaymentTransaction[]
     */
    public function findLatestForUser(User $user, int $limit = 50): array
    {
        try {
            return $this->createQueryBuilder('transaction')
                ->andWhere('transaction.user = :user')
                ->setParameter('user', $user)
                ->orderBy('transaction.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } catch (TableNotFoundException) {
            // Table not created yet – return empty list to keep admin screen working
            return [];
        }
    }

    /**
     * @return PaymentTransaction[]
     */
    public function findLatest(int $limit = 100): array
    {
        try {
            return $this->createQueryBuilder('transaction')
                ->leftJoin('transaction.user', 'u')
                ->addSelect('u')
                ->orderBy('transaction.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } catch (TableNotFoundException) {
            return [];
        }
    }
}

