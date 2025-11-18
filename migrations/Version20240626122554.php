<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240626122554 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE memory_thema (id INT AUTO_INCREMENT NOT NULL, thema VARCHAR(255) NOT NULL, classname VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE memory ADD thema_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE memory ADD CONSTRAINT FK_EA6D3435D660E3D0 FOREIGN KEY (thema_id) REFERENCES memory_thema (id)');
        $this->addSql('CREATE INDEX IDX_EA6D3435D660E3D0 ON memory (thema_id)');
        $this->addSql('ALTER TABLE qr_code DROP INDEX label, ADD UNIQUE INDEX UNIQ_7D8B1FB5EA750E8 (label)');
        $this->addSql('ALTER TABLE qr_code CHANGE label label TINYTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE words_memory CHANGE words words VARCHAR(3000) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE memory DROP FOREIGN KEY FK_EA6D3435D660E3D0');
        $this->addSql('DROP TABLE memory_thema');
        $this->addSql('DROP INDEX IDX_EA6D3435D660E3D0 ON memory');
        $this->addSql('ALTER TABLE memory DROP thema_id');
        $this->addSql('ALTER TABLE qr_code DROP INDEX UNIQ_7D8B1FB5EA750E8, ADD UNIQUE INDEX label (label(20))');
        $this->addSql('ALTER TABLE qr_code CHANGE label label VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE words_memory CHANGE words words VARCHAR(3000) DEFAULT NULL');
    }
}
