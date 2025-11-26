<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20251107042259 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE memory_change_request (id INT AUTO_INCREMENT NOT NULL, memory_id INT NOT NULL, requester_name VARCHAR(100) NOT NULL, requester_email VARCHAR(180) NOT NULL, message LONGTEXT DEFAULT NULL, status VARCHAR(32) NOT NULL, attachments JSON DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_B1CEF5E5CCC80CB3 (memory_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payment_transaction (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, amount NUMERIC(10, 2) NOT NULL, type VARCHAR(32) NOT NULL, status VARCHAR(32) NOT NULL, reference VARCHAR(100) DEFAULT NULL, message LONGTEXT DEFAULT NULL, error_code VARCHAR(64) DEFAULT NULL, payload JSON DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX IDX_84BBD50BA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE memory_change_request ADD CONSTRAINT FK_B1CEF5E5CCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE payment_transaction ADD CONSTRAINT FK_84BBD50BA76ED395 FOREIGN KEY (user_id) REFERENCES `user` (id)');
        $this->addSql('ALTER TABLE transactions DROP FOREIGN KEY transactions_ibfk_1');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE transactions');
        $this->addSql('ALTER TABLE burial_place DROP FOREIGN KEY burial_place_ibfk_1');
        $this->addSql('ALTER TABLE burial_place DROP created_at, DROP updated_at');
        $this->addSql('ALTER TABLE burial_place ADD CONSTRAINT FK_2D05305586BA05FE FOREIGN KEY (memories_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE burial_place RENAME INDEX idx_memories TO IDX_2D05305586BA05FE');
        $this->addSql('ALTER TABLE epitaph DROP FOREIGN KEY epitaph_ibfk_1');
        $this->addSql('ALTER TABLE epitaph DROP created_at, DROP updated_at, CHANGE text text VARCHAR(1000) NOT NULL');
        $this->addSql('ALTER TABLE epitaph ADD CONSTRAINT FK_1AFCA281CCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE epitaph RENAME INDEX idx_memory TO IDX_1AFCA281CCC80CB3');
        $this->addSql('ALTER TABLE links_memory DROP FOREIGN KEY links_memory_ibfk_1');
        $this->addSql('ALTER TABLE links_memory DROP created_at, DROP updated_at, CHANGE link_text link_text VARCHAR(255) NOT NULL, CHANGE link link VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE links_memory ADD CONSTRAINT FK_C0E1FE5ACCC80CB3 FOREIGN KEY (memory_id) REFERENCES memory (id)');
        $this->addSql('ALTER TABLE links_memory RENAME INDEX idx_memory TO IDX_C0E1FE5ACCC80CB3');
        $this->addSql('ALTER TABLE memory ADD memorial_lat VARCHAR(255) DEFAULT NULL, ADD memorial_lng VARCHAR(255) DEFAULT NULL, ADD memorial_address VARCHAR(1000) DEFAULT NULL, DROP created_at, DROP updated_at, CHANGE first_name first_name VARCHAR(25) NOT NULL, CHANGE last_name last_name VARCHAR(255) NOT NULL, CHANGE patronymic patronymic VARCHAR(255) NOT NULL, CHANGE date_birth date_birth DATE NOT NULL, CHANGE date_deads date_deads DATE NOT NULL, CHANGE main_photo main_photo VARCHAR(255) NOT NULL');
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
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE transactions (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, type VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_0900_ai_ci`, amount NUMERIC(10, 2) NOT NULL, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, status VARCHAR(50) CHARACTER SET utf8mb4 DEFAULT \'pending\' COLLATE `utf8mb4_0900_ai_ci`, payment_id VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, payment_data LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_0900_ai_ci`, created_at DATETIME NOT NULL, updated_at DATETIME NOT NULL, INDEX user_id (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_0900_ai_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE transactions ADD CONSTRAINT transactions_ibfk_1 FOREIGN KEY (user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE memory_change_request DROP FOREIGN KEY FK_B1CEF5E5CCC80CB3');
        $this->addSql('ALTER TABLE payment_transaction DROP FOREIGN KEY FK_84BBD50BA76ED395');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE memory_change_request');
        $this->addSql('DROP TABLE payment_transaction');
        $this->addSql('ALTER TABLE roles CHANGE task_calculation_active task_calculation_active TINYINT(1) DEFAULT 0, CHANGE is_selectable is_selectable TINYINT(1) DEFAULT 1, CHANGE task_calculation_active_crm task_calculation_active_crm TINYINT(1) DEFAULT 1');
        $this->addSql('ALTER TABLE `user` DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('ALTER TABLE `user` ADD deleted_at DATETIME DEFAULT NULL, ADD company_name VARCHAR(255) DEFAULT NULL, ADD inn VARCHAR(255) DEFAULT NULL, CHANGE balance balance NUMERIC(10, 2) DEFAULT \'0.00\'');
        $this->addSql('ALTER TABLE `user` ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES roles (id) ON UPDATE NO ACTION ON DELETE SET NULL');
        $this->addSql('ALTER TABLE memory_thema ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE thema thema VARCHAR(255) DEFAULT NULL, CHANGE classname classname VARCHAR(255) DEFAULT NULL, CHANGE status status TINYINT(1) DEFAULT 1');
        $this->addSql('ALTER TABLE epitaph DROP FOREIGN KEY FK_1AFCA281CCC80CB3');
        $this->addSql('ALTER TABLE epitaph ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE text text VARCHAR(1000) DEFAULT NULL');
        $this->addSql('ALTER TABLE epitaph ADD CONSTRAINT epitaph_ibfk_1 FOREIGN KEY (memory_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE epitaph RENAME INDEX idx_1afca281ccc80cb3 TO idx_memory');
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
        $this->addSql('ALTER TABLE burial_place DROP FOREIGN KEY FK_2D05305586BA05FE');
        $this->addSql('ALTER TABLE burial_place ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL');
        $this->addSql('ALTER TABLE burial_place ADD CONSTRAINT burial_place_ibfk_1 FOREIGN KEY (memories_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE burial_place RENAME INDEX idx_2d05305586ba05fe TO idx_memories');
        $this->addSql('ALTER TABLE photo_arhive DROP FOREIGN KEY FK_59EEDD3FCCC80CB3');
        $this->addSql('ALTER TABLE photo_arhive ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, ADD memory_entity_id INT DEFAULT NULL, CHANGE photo photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE photo_arhive ADD CONSTRAINT photo_arhive_ibfk_1 FOREIGN KEY (memory_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('CREATE INDEX idx_memory_entity ON photo_arhive (memory_entity_id)');
        $this->addSql('ALTER TABLE photo_arhive RENAME INDEX idx_59eedd3fccc80cb3 TO idx_memory');
        $this->addSql('ALTER TABLE links_memory DROP FOREIGN KEY FK_C0E1FE5ACCC80CB3');
        $this->addSql('ALTER TABLE links_memory ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, CHANGE link link VARCHAR(500) DEFAULT NULL, CHANGE link_text link_text VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE links_memory ADD CONSTRAINT links_memory_ibfk_1 FOREIGN KEY (memory_id) REFERENCES memory (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE links_memory RENAME INDEX idx_c0e1fe5accc80cb3 TO idx_memory');
        $this->addSql('ALTER TABLE menu DROP FOREIGN KEY FK_7D053A93727ACA70');
        $this->addSql('ALTER TABLE menu CHANGE id id INT AUTO_INCREMENT NOT NULL, CHANGE parent_id parent_id INT DEFAULT NULL, CHANGE sorting sorting INT DEFAULT NULL');
        $this->addSql('ALTER TABLE menu RENAME INDEX idx_7d053a93727aca70 TO idx_parent');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_sorting TO idx_sorting');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_active TO idx_active');
        $this->addSql('ALTER TABLE menu RENAME INDEX i_type TO idx_type');
        $this->addSql('ALTER TABLE memory ADD created_at DATETIME DEFAULT NULL, ADD updated_at DATETIME DEFAULT NULL, DROP memorial_lat, DROP memorial_lng, DROP memorial_address, CHANGE first_name first_name VARCHAR(25) DEFAULT NULL, CHANGE last_name last_name VARCHAR(255) DEFAULT NULL, CHANGE patronymic patronymic VARCHAR(255) DEFAULT NULL, CHANGE date_birth date_birth DATE DEFAULT NULL, CHANGE date_deads date_deads DATE DEFAULT NULL, CHANGE main_photo main_photo VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_ea6d343519eb6921 TO idx_client');
        $this->addSql('ALTER TABLE memory RENAME INDEX idx_ea6d3435d660e3d0 TO idx_thema');
    }
}
