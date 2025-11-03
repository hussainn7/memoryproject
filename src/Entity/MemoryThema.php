<?php

namespace App\Entity;

use App\Repository\MemoryThemaRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MemoryThemaRepository::class)]
class MemoryThema
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $thema = null;

    #[ORM\Column(length: 255)]
    private ?string $classname = null;

    /**
     * @var Collection<int, Memory>
     */
    #[ORM\OneToMany(mappedBy: 'thema', targetEntity: Memory::class)]
    private Collection $memories;

    #[ORM\Column(nullable: true)]
    private ?bool $status = null;

    public function __construct()
    {
        $this->memories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getThema(): ?string
    {
        return $this->thema;
    }

    public function setThema(string $thema): static
    {
        $this->thema = $thema;

        return $this;
    }

    public function getClassname(): ?string
    {
        return $this->classname;
    }

    public function setClassname(string $classname): static
    {
        $this->classname = $classname;

        return $this;
    }

    /**
     * @return Collection<int, Memory>
     */
    public function getMemories(): Collection
    {
        return $this->memories;
    }

    public function addMemory(Memory $memory): static
    {
        if (!$this->memories->contains($memory)) {
            $this->memories->add($memory);
            $memory->setThema($this);
        }

        return $this;
    }

    public function removeMemory(Memory $memory): static
    {
        if ($this->memories->removeElement($memory)) {
            // set the owning side to null (unless already changed)
            if ($memory->getThema() === $this) {
                $memory->setThema(null);
            }
        }

        return $this;
    }

    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(?bool $status): static
    {
        $this->status = $status;

        return $this;
    }
}
