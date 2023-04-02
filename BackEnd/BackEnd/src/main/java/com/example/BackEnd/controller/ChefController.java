package com.example.BackEnd.controller;

import com.example.BackEnd.exception.AdminNotFoundException;
import com.example.BackEnd.exception.ChefNotFoundException;
import com.example.BackEnd.model.Admin;
import com.example.BackEnd.model.Chef;
import com.example.BackEnd.repository.AdminRepository;
import com.example.BackEnd.repository.ChefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ChefController {

    @Autowired
    private ChefRepository chefRepository;

    @PostMapping("/chef")
    Chef newChef(@RequestBody Chef newChef){
        return chefRepository.save(newChef);
    }

    @GetMapping("/chefs")
    List<Chef> getAllChefs(){
        return chefRepository.findAll();
    }

    @GetMapping("/chef/{id}")
    Chef getChefById(@PathVariable int id){
        return chefRepository.findById(id)
                .orElseThrow(()->new ChefNotFoundException(id));
    }

    @PutMapping("/chef/{id}")
    Chef updateChef(@RequestBody Chef newChef,@PathVariable int id){
        return chefRepository.findById(id)
                .map(chef -> {
                    chef.setChef_username(newChef.getChef_username());
                    chef.setChef_name(newChef.getChef_name());
                    chef.setChef_password(newChef.getChef_password());
                    chef.setChef_email(newChef.getChef_email());
                    return chefRepository.save(chef);
                }).orElseThrow(()->new ChefNotFoundException(id));
    }

    @DeleteMapping("chef/{id}")
    String deleteChef(@PathVariable int id){
        if(!chefRepository.existsById(id)){
            throw new ChefNotFoundException(id);
        }
        chefRepository.deleteById(id);
        return "Chef with id "+id+" has been deleted successfully.";
    }

}
