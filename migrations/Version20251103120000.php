<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20251103120000 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add user balance column and payment transaction table for Robokassa placeholder integration';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE `user` ADD balance NUMERIC(10, 2) DEFAULT 0.00 NOT NULL');
        $this->addSql('CREATE TABLE payment_transaction (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, amount NUMERIC(10, 2) NOT NULL, type VARCHAR(32) NOT NULL, status VARCHAR(32) NOT NULL, reference VARCHAR(100) DEFAULT NULL, message LONGTEXT DEFAULT NULL, error_code VARCHAR(64) DEFAULT NULL, payload JSON DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_36F98D9AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE payment_transaction ADD CONSTRAINT FK_36F98D9AA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE payment_transaction DROP FOREIGN KEY FK_36F98D9AA76ED395');
        $this->addSql('DROP TABLE payment_transaction');
        $this->addSql('ALTER TABLE `user` DROP balance');
    }
}

