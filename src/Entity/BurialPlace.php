<?php

namespace App\Entity;

use App\Repository\BurialPlaceRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BurialPlaceRepository::class)]
class BurialPlace
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 1000, nullable: true)]
    private ?string $adress = null;

//    #[ORM\OneToOne(mappedBy: 'burialPlace', cascade: ['persist', 'remove'])]
//    private ?Memory $memory = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lat = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $lng = null;

    #[ORM\ManyToOne(inversedBy: 'burialPlace')]
    private ?Memory $memories = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(?string $adress): static
    {
        $this->adress = $adress;

        return $this;
    }

    
//    public function getMemory(): ?Memory
//    {
//        return $this->memory;
//    }
//
//    public function setMemory(?Memory $memory): static
//    {
//        // unset the owning side of the relation if necessary
//        if ($memory === null && $this->memory !== null) {
//            $this->memory->setBurialPlace(null);
//        }
//
//        // set the owning side of the relation if necessary
//        if ($memory !== null && $memory->getBurialPlace() !== $this) {
//            $memory->setBurialPlace($this);
//        }
//
//        $this->memory = $memory;
//
//        return $this;
//    }

    public function getLat(): ?string
    {
        return $this->lat;
    }

    public function setLat(?string $lat): static
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?string
    {
        return $this->lng;
    }

    public function setLng(?string $lng): static
    {
        $this->lng = $lng;

        return $this;
    }

    public function getMemories(): ?Memory
    {
        return $this->memories;
    }

    public function setMemories(?Memory $memories): static
    {
        $this->memories = $memories;

        return $this;
    }
}
