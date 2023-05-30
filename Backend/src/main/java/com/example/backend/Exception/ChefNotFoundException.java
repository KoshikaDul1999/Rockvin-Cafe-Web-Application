package com.example.backend.Exception;

public class ChefNotFoundException extends RuntimeException{

    public ChefNotFoundException(int chef_id){
        super("Could not found the chef with id "+ chef_id);
    }
}
