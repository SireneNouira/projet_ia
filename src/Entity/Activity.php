<?php

namespace App\Entity;

use App\Repository\ActivityRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ActivityRepository::class)]
class Activity
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $quotidien = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getQuotidien(): ?string
    {
        return $this->quotidien;
    }

    public function setQuotidien(?string $quotidien): static
    {
        $this->quotidien = $quotidien;

        return $this;
    }
}
