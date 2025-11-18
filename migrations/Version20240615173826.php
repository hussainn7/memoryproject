<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240615173826 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE burial_place (id INT AUTO_INCREMENT NOT NULL, adress VARCHAR(1000) DEFAULT NULL, coordinates VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE epitaph (id INT AUTO_INCREMENT NOT NULL, memory_id INT DEFAULT NULL, text VARCHAR(1000) NOT NULL, sub_text VARCHAR(255) DEFAULT NULL, INDEX IDX_1AFCA281CCC80CB3 (memory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE links_memory (id INT AUTO_INCREMENT NOT NULL, memory_id INT DEFAULT NULL, link VARCHAR(255) NOT NULL, type VARCHAR(255) DEFAULT NULL, client VARCHAR(255) DEFAULT NULL, INDEX IDX_C0E1FE5ACCC80CB3 (memory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE photo_arhive (id INT AUTO_INCREMENT NOT NULL, memory_id INT DEFAULT NULL, photo VARCHAR(255) NOT NULL, description VARCHAR(255) DEFAULT NULL, sort VARCHAR(255) DEFAULT NULL, INDEX IDX_59EEDD3FCCC80CB3 (memory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE words_memory (id INT AUTO_INCREMENT NOT NULL, memory_id INT DEFAULT NULL, words VARCHAR(3000) NOT NULL, from_people VARCHAR(255) DEFAULT NULL, INDEX IDX_B7F5D35CCCC80CB3 (memory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE epitaph ADD CONSTRAINT FK_1AFCA281CCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE links_memory ADD CONSTRAINT FK_C0E1FE5ACCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE photo_arhive ADD CONSTRAINT FK_59EEDD3FCCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE words_memory ADD CONSTRAINT FK_B7F5D35CCCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE memory ADD burial_place_id INT DEFAULT NULL, ADD client_id INT DEFAULT NULL, ADD main_photo VARCHAR(255) NOT NULL, ADD biography VARCHAR(3000) DEFAULT NULL');
        $this->addSql('ALTER TABLE memory ADD CONSTRAINT FK_EA6D3435A31AEB3A FOREIGN KEY (burial_place_id) REFERENCES burial_place (id)');
        $this->addSql('ALTER TABLE memory ADD CONSTRAINT FK_EA6D343519EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_EA6D3435A31AEB3A ON memory (burial_place_id)');
        $this->addSql('CREATE INDEX IDX_EA6D343519EB6921 ON memory (client_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE memory DROP FOREIGN KEY FK_EA6D3435A31AEB3A');
        $this->addSql('ALTER TABLE memory DROP FOREIGN KEY FK_EA6D343519EB6921');
        $this->addSql('ALTER TABLE epitaph DROP FOREIGN KEY FK_1AFCA281CCC80CB3');
        $this->addSql('ALTER TABLE links_memory DROP FOREIGN KEY FK_C0E1FE5ACCC80CB3');
        $this->addSql('ALTER TABLE photo_arhive DROP FOREIGN KEY FK_59EEDD3FCCC80CB3');
        $this->addSql('ALTER TABLE words_memory DROP FOREIGN KEY FK_B7F5D35CCCC80CB3');
        $this->addSql('DROP TABLE burial_place');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE epitaph');
        $this->addSql('DROP TABLE links_memory');
        $this->addSql('DROP TABLE photo_arhive');
        $this->addSql('DROP TABLE words_memory');
        $this->addSql('DROP INDEX UNIQ_EA6D3435A31AEB3A ON memory');
        $this->addSql('DROP INDEX IDX_EA6D343519EB6921 ON memory');
        $this->addSql('ALTER TABLE memory DROP burial_place_id, DROP client_id, DROP main_photo, DROP biography');
    }
}
