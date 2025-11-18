<?php

namespace App\Repository;

use App\Entity\MemoryChangeRequest;
use App\Entity\Memory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\DBAL\Exception\TableNotFoundException;

/**
 * @extends ServiceEntityRepository<MemoryChangeRequest>
 */
class MemoryChangeRequestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MemoryChangeRequest::class);
    }

    /**
     * @return MemoryChangeRequest[]
     */
    public function findLatestAll(int $limit = 100): array
    {
        try {
            return $this->createQueryBuilder('r')
                ->leftJoin('r.memory', 'm')
                ->addSelect('m')
                ->orderBy('r.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } catch (TableNotFoundException) {
            return [];
        }
    }

    /**
     * @param Memory[] $memories
     * @return MemoryChangeRequest[]
     */
    public function findLatestForMemories(array $memories, int $limit = 100): array
    {
        if (empty($memories)) {
            return [];
        }
        try {
            return $this->createQueryBuilder('r')
                ->andWhere('r.memory IN (:mems)')
                ->setParameter('mems', $memories)
                ->orderBy('r.createdAt', 'DESC')
                ->setMaxResults($limit)
                ->getQuery()
                ->getResult();
        } catch (TableNotFoundException) {
            return [];
        }
    }
}


