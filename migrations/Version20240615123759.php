<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240615123759 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE qr_code ADD label INT(9) UNSIGNED ZEROFILL ');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7D8B1FB5EA750E8 ON qr_code (label)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX UNIQ_7D8B1FB5EA750E8 ON qr_code');
        $this->addSql('ALTER TABLE qr_code DROP label');
    }
}
