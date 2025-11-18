<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240616172919 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE burial_place ADD memories_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE burial_place ADD CONSTRAINT FK_2D05305586BA05FE FOREIGN KEY (memories_id) REFERENCES memory (id)');
        $this->addSql('CREATE INDEX IDX_2D05305586BA05FE ON burial_place (memories_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE burial_place DROP FOREIGN KEY FK_2D05305586BA05FE');
        $this->addSql('DROP INDEX IDX_2D05305586BA05FE ON burial_place');
        $this->addSql('ALTER TABLE burial_place DROP memories_id');
    }
}
