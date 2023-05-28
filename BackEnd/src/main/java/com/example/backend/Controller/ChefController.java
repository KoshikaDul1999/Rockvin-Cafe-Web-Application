package com.example.backend.Controller;

import com.example.backend.Exception.ChefNotFoundException;
import com.example.backend.Entity.Chef;
import com.example.backend.Repository.ChefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
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

    @GetMapping("/chef/{chef_id}")
    Chef getChefById(@PathVariable int chef_id){
        return chefRepository.findById(chef_id)
                .orElseThrow(()->new ChefNotFoundException(chef_id));
    }

    @PutMapping("/chef/{chef_id}")
    Chef updateChef(@RequestBody Chef newChef,@PathVariable int chef_id){
        return chefRepository.findById(chef_id)
                .map(chef -> {
                    chef.setChef_username(newChef.getChef_username());
                    chef.setChef_name(newChef.getChef_name());
                    chef.setChef_password(newChef.getChef_password());
                    chef.setChef_email(newChef.getChef_email());
                    return chefRepository.save(chef);
                }).orElseThrow(()->new ChefNotFoundException(chef_id));
    }

    @DeleteMapping("chef/{chef_id}")
    String deleteChef(@PathVariable int chef_id){
        if(!chefRepository.existsById(chef_id)){
            throw new ChefNotFoundException(chef_id);
        }
        chefRepository.deleteById(chef_id);
        return "Chef with id "+chef_id+" has been deleted successfully.";
    }

}
