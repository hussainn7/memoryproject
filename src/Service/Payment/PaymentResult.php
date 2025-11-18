<?php

namespace App\Service\Payment;

use App\Entity\PaymentTransaction;

class PaymentResult
{
    public function __construct(
        private readonly bool $success,
        private readonly string $message,
        private readonly PaymentTransaction $transaction,
        private readonly array $context = []
    ) {
    }

    public function isSuccess(): bool
    {
        return $this->success;
    }

    public function getMessage(): string
    {
        return $this->message;
    }

    public function getTransaction(): PaymentTransaction
    {
        return $this->transaction;
    }

    public function getContext(): array
    {
        return $this->context;
    }
}

