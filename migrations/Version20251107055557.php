<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251107055557 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE memory DROP created_at, DROP updated_at, CHANGE first_name first_name VARCHAR(25) NOT NULL, CHANGE last_name last_name VARCHAR(255) NOT NULL, CHANGE patronymic patronymic VARCHAR(255) NOT NULL, CHANGE date_birth date_birth DATE NOT NULL, CHANGE date_deads date_deads DATE NOT NULL, CHANGE main_photo main_photo VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_client TO IDX_EA6D343519EB6921');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_thema TO IDX_EA6D3435D660E3D0');
        $this->addSql('ALTER TABLE memory_thema DROP created_at, DROP updated_at, CHANGE thema thema VARCHAR(255) NOT NULL, CHANGE classname classname VARCHAR(255) NOT NULL, CHANGE status status TINYINT(1) DEFAULT NULL');
        $this->addSql('ALTER TABLE menu CHANGE id id INT UNSIGNED AUTO_INCREMENT NOT NULL, CHANGE parent_id parent_id INT UNSIGNED DEFAULT NULL, CHANGE sorting sorting INT UNSIGNED DEFAULT NULL');
        $this->addSql('ALTER TABLE menu ADD CONSTRAINT FK_7D053A93727ACA70 FOREIGN KEY (parent_id) REFERENCES menu (id)');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_parent TO IDX_7D053A93727ACA70');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_sorting TO i_sorting');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_active TO i_active');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_type TO i_type');
        $this->addSql('ALTER TABLE photo_arhive DROP FOREIGN KEY photo_arhive_ibfk_1');
        $this->addSql('DROP INDEX idx_memory_entity ON photo_arhive');
        $this->addSql('ALTER TABLE photo_arhive DROP created_at, DROP updated_at, DROP memory_entity_id, CHANGE photo photo VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE photo_arhive ADD CONSTRAINT FK_59EEDD3FCCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE photo_arhive RENAME INDEX idx_memory TO IDX_59EEDD3FCCC80CB3');
        $this->addSql('ALTER TABLE qr_code DROP INDEX idx_memory, ADD UNIQUE INDEX UNIQ_7D8B1FB5CCC80CB3 (memory_id)');
        $this->addSql('DROP INDEX uuid ON qr_code');
        $this->addSql('ALTER TABLE qr_code CHANGE label label TINYTEXT DEFAULT NULL, CHANGE img img LONGTEXT DEFAULT NULL, CHANGE created_at created_at DATETIME DEFAULT NULL, CHANGE updated_at updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX label TO UNIQ_7D8B1FB5EA750E8');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_user TO IDX_7D8B1FB5A76ED395');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_client TO IDX_7D8B1FB519EB6921');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_status TO IDX_7D8B1FB56BF700BD');
        $this->addSql('ALTER TABLE roles CHANGE is_selectable is_selectable TINYINT(1) DEFAULT 1 NOT NULL, CHANGE task_calculation_active task_calculation_active TINYINT(1) DEFAULT 0 NOT NULL, CHANGE task_calculation_active_crm task_calculation_active_crm TINYINT(1) DEFAULT 1 NOT NULL');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('ALTER TABLE user DROP deleted_at, DROP company_name, DROP inn, CHANGE balance balance NUMERIC(10, 2) DEFAULT \'0.00\' NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES roles (id)');
        $this->addSql('ALTER TABLE words_memory DROP FOREIGN KEY words_memory_ibfk_1');
        $this->addSql('ALTER TABLE words_memory DROP created_at, DROP updated_at, CHANGE words words VARCHAR(3000) NOT NULL');
        $this->addSql('ALTER TABLE words_memory ADD CONSTRAINT FK_B7F5D35CCCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE words_memory RENAME INDEX idx_memory TO IDX_B7F5D35CCCC80CB3');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE roles CHANGE task_calculation_active task_calculation_active TINYINT(1) DEFAULT 0, CHANGE is_selectable is_selectable TINYINT(1) DEFAULT 1, CHANGE task_calculation_active_crm task_calculation_active_crm TINYINT(1) DEFAULT 1');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('ALTER TABLE `user` ADD deleted_at DATETIME DEFAULT NULL, ADD company_name VARCHAR(255) DEFAULT NULL, ADD inn VARCHAR(255) DEFAULT NULL, CHANGE balance balance NUMERIC(10, 2) DEFAULT \'0.00\'');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES roles (id) ON UPDATE NO ACTION ON DELETE SET NULL');
        $this->addSql('ALTER TABLE memory_thema ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE thema thema VARCHAR(255) DEFAULT NULL, CHANGE classname classname VARCHAR(255) DEFAULT NULL, CHANGE status status TINYINT(1) DEFAULT 1');
        $this->addSql('ALTER TABLE qr_code DROP INDEX UNIQ_7D8B1FB5CCC80CB3, ADD INDEX idx_memory (memory_id)');
        $this->addSql('ALTER TABLE qr_code CHANGE label label VARCHAR(9) DEFAULT NULL, CHANGE img img TEXT DEFAULT NULL, CHANGE created_at created_at DATETIME NOT NULL, CHANGE updated_at updated_at DATETIME NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX uuid ON qr_code (uuid)');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX uniq_7d8b1fb5ea750e8 TO label');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_7d8b1fb5a76ed395 TO idx_user');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_7d8b1fb519eb6921 TO idx_client');
        $this->addSql('ALTER TABLE qr_code RENAME INDEX idx_7d8b1fb56bf700bd TO idx_status');
        $this->addSql('ALTER TABLE words_memory DROP FOREIGN KEY FK_B7F5D35CCCC80CB3');
        $this->addSql('ALTER TABLE words_memory ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE words words VARCHAR(1000) DEFAULT NULL');
        $this->addSql('ALTER TABLE words_memory ADD CONSTRAINT words_memory_ibfk_1 FOREIGN KEY (memory_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE words_memory RENAME INDEX idx_b7f5d35cccc80cb3 TO idx_memory');
        $this->addSql('ALTER TABLE photo_arhive DROP FOREIGN KEY FK_59EEDD3FCCC80CB3');
        $this->addSql('ALTER TABLE photo_arhive ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, ADD memory_entity_id INT DEFAULT NULL, CHANGE photo photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE photo_arhive ADD CONSTRAINT photo_arhive_ibfk_1 FOREIGN KEY (memory_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('CREATE INDEX idx_memory_entity ON photo_arhive (memory_entity_id)');
        $this->addSql('ALTER TABLE photo_arhive RENAME INDEX idx_59eedd3fccc80cb3 TO idx_memory');
        $this->addSql('ALTER TABLE menu DROP FOREIGN KEY FK_7D053A93727ACA70');
        $this->addSql('ALTER TABLE menu CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE sorting sorting INT DEFAULT NULL');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_7d053a93727aca70 TO idx_parent');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_sorting TO idx_sorting');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_active TO idx_active');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_type TO idx_type');
        $this->addSql('ALTER TABLE memory ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE first_name first_name VARCHAR(25) DEFAULT NULL, CHANGE last_name last_name VARCHAR(255) DEFAULT NULL, CHANGE patronymic patronymic VARCHAR(255) DEFAULT NULL, CHANGE date_birth date_birth DATE DEFAULT NULL, CHANGE date_deads date_deads DATE DEFAULT NULL, CHANGE main_photo main_photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_ea6d343519eb6921 TO idx_client');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_ea6d3435d660e3d0 TO idx_thema');
    }
}
