<?php

namespace App\Entity;

use App\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ClientRepository::class)]
class Client
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    /**
     * @var Collection<int, Memory>
     */
    #[ORM\OneToMany(mappedBy: 'client', targetEntity: Memory::class)]
    private Collection $memories;

    public function __construct()
    {
        $this->memories = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

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
            $memory->setClient($this);
        }

        return $this;
    }

    public function removeMemory(Memory $memory): static
    {
        if ($this->memories->removeElement($memory)) {
            // set the owning side to null (unless already changed)
            if ($memory->getClient() === $this) {
                $memory->setClient(null);
            }
        }

        return $this;
    }
}
