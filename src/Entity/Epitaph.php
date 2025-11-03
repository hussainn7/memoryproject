<?php

namespace App\Entity;

use App\Repository\EpitaphRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EpitaphRepository::class)]
class Epitaph
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 1000)]
    private ?string $text = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $subText = null;

    #[ORM\ManyToOne(inversedBy: 'epitaph')]
    private ?Memory $memory = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(?string $text): static
    {
        $this->text = $text;

        return $this;
    }

    public function getSubText(): ?string
    {
        return $this->subText;
    }

    public function setSubText(?string $subText): static
    {
        $this->subText = $subText;

        return $this;
    }

    public function getMemory(): ?Memory
    {
        return $this->memory;
    }

    public function setMemory(?Memory $memory): static
    {
        $this->memory = $memory;

        return $this;
    }
}
