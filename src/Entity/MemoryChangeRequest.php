<?php

namespace App\Entity;

use App\Repository\MemoryChangeRequestRepository;
use App\Traits\Entity\EntityDatesTrait;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MemoryChangeRequestRepository::class)]
#[ORM\HasLifecycleCallbacks]
class MemoryChangeRequest
{
    use EntityDatesTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Memory $memory = null;

    #[ORM\Column(length: 100)]
    private string $requesterName = '';

    #[ORM\Column(length: 180)]
    private string $requesterEmail = '';

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $message = null;

    #[ORM\Column(length: 32)]
    private string $status = 'pending';

    #[ORM\Column(type: 'json', nullable: true)]
    private ?array $attachments = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMemory(): ?Memory
    {
        return $this->memory;
    }

    public function setMemory(?Memory $memory): self
    {
        $this->memory = $memory;
        return $this;
    }

    public function getRequesterName(): string
    {
        return $this->requesterName;
    }

    public function setRequesterName(string $name): self
    {
        $this->requesterName = $name;
        return $this;
    }

    public function getRequesterEmail(): string
    {
        return $this->requesterEmail;
    }

    public function setRequesterEmail(string $email): self
    {
        $this->requesterEmail = $email;
        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;
        return $this;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getAttachments(): ?array
    {
        return $this->attachments;
    }

    public function setAttachments(?array $attachments): self
    {
        $this->attachments = $attachments;
        return $this;
    }
}


