package com.example.backend.Repository;

import com.example.backend.Entity.Chef;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChefRepository extends JpaRepository<Chef,Integer> {
}
