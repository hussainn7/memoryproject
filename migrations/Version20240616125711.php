<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240616125711 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE burial_place ADD lng VARCHAR(255) DEFAULT NULL, CHANGE coordinates lat VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE links_memory ADD link_text VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE memory DROP FOREIGN KEY FK_EA6D3435A31AEB3A');
        $this->addSql('DROP INDEX UNIQ_EA6D3435A31AEB3A ON memory');
        $this->addSql('ALTER TABLE memory DROP burial_place_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE burial_place ADD coordinates VARCHAR(255) DEFAULT NULL, DROP lat, DROP lng');
        $this->addSql('ALTER TABLE links_memory DROP link_text');
        $this->addSql('ALTER TABLE memory ADD burial_place_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE memory ADD CONSTRAINT FK_EA6D3435A31AEB3A FOREIGN KEY (burial_place_id) REFERENCES burial_place (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EA6D3435A31AEB3A ON memory (burial_place_id)');
    }
}
