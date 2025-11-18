<?php

namespace App\Service\Payment;

use App\Entity\PaymentTransaction;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Doctrine\DBAL\Exception\TableNotFoundException;

class PaymentService
{
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly LoggerInterface $logger
    ) {
    }

    public function simulateRobokassaDeposit(User $user, float $amount): PaymentResult
    {
        $transaction = new PaymentTransaction();
        $transaction->setUser($user)
            ->setAmount(abs($amount))
            ->setType('deposit')
            ->setReference($this->generateReference())
            ->setPayload([
                'mode' => 'test',
                'gateway' => 'robokassa',
            ]);

        if ($amount <= 0) {
            $transaction->setStatus('failed')
                ->setMessage('Сумма должна быть больше нуля.')
                ->setErrorCode('invalid_amount');

            try {
                $this->entityManager->persist($transaction);
                $this->entityManager->flush();
            } catch (TableNotFoundException) {
                // Table not ready yet; skip persisting transaction, just report validation error
                $this->logger->warning('PaymentTransaction table missing while saving invalid amount transaction');
            }

            return new PaymentResult(false, 'Сумма должна быть больше нуля.', $transaction, [
                'amount' => $amount,
            ]);
        }

        try {
            $transaction->setStatus('success')
                ->setMessage('Баланс пополнен через тестовый платеж.');

            // Always persist user balance even if transactions table is missing
            $user->increaseBalance($amount);
            $this->entityManager->persist($user);
            $this->entityManager->flush();

            // Best-effort save of transaction
            try {
                $this->entityManager->persist($transaction);
                $this->entityManager->flush();
            } catch (TableNotFoundException $e) {
                $this->logger->warning('PaymentTransaction table missing; skipping transaction persist', [
                    'user_id' => $user->getId(),
                    'amount' => $amount,
                ]);
            }

            return new PaymentResult(true, 'Баланс успешно пополнен.', $transaction, [
                'amount' => $amount,
            ]);
        } catch (\Throwable $exception) {
            $transaction->setStatus('failed')
                ->setMessage('Не удалось сохранить информацию о платеже.')
                ->setErrorCode('persist_error')
                ->setPayload([
                    'exception' => $exception->getMessage(),
                ]);

            $this->logger->error('Payment simulation failed', [
                'user_id' => $user->getId(),
                'amount' => $amount,
                'exception' => $exception,
            ]);

            try {
                $this->entityManager->persist($transaction);
                $this->entityManager->flush();
            } catch (TableNotFoundException) {
                $this->logger->warning('PaymentTransaction table missing while persisting failure state');
            }

            return new PaymentResult(false, 'Ошибка при обработке платежа. Попробуйте позже.', $transaction);
        }
    }

    private function generateReference(): string
    {
        try {
            return 'TEST-' . strtoupper(bin2hex(random_bytes(4)));
        } catch (\Throwable) {
            return 'TEST-' . uniqid();
        }
    }
}

