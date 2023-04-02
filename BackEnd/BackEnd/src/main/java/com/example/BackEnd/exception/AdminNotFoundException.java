package com.example.BackEnd.exception;

public class AdminNotFoundException extends RuntimeException{
    public AdminNotFoundException(int id){
        super("Could not found the chef with id "+ id);
    }
}
