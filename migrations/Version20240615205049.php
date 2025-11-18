<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240615205049 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE photo_arhive ADD memory_entity_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE photo_arhive ADD CONSTRAINT FK_59EEDD3FDD8048D1 FOREIGN KEY (memory_entity_id) REFERENCES memory (id)');
        $this->addSql('CREATE INDEX IDX_59EEDD3FDD8048D1 ON photo_arhive (memory_entity_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE photo_arhive DROP FOREIGN KEY FK_59EEDD3FDD8048D1');
        $this->addSql('DROP INDEX IDX_59EEDD3FDD8048D1 ON photo_arhive');
        $this->addSql('ALTER TABLE photo_arhive DROP memory_entity_id');
    }
}
