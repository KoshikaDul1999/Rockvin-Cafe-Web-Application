package com.example.backend.Repository;

import com.example.backend.Model.Chef;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChefRepository extends JpaRepository<Chef,Integer> {
}
