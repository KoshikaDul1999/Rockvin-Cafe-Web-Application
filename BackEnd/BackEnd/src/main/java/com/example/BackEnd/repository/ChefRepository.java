package com.example.BackEnd.repository;

import com.example.BackEnd.model.Chef;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChefRepository extends JpaRepository<Chef,Integer> {
}
