package com.example.BackEnd.exception;

public class CategoryNotFoundException extends RuntimeException{
    public CategoryNotFoundException(int category_id){
        super("Could not found the category with id "+ category_id);
    }
}
