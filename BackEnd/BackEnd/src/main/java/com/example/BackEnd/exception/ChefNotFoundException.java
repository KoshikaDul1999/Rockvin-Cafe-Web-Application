package com.example.BackEnd.exception;

public class ChefNotFoundException extends RuntimeException{

    public ChefNotFoundException(int id){
        super("Could not found the chef with id "+ id);
    }

}
