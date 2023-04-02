package com.example.BackEnd.controller;

import com.example.BackEnd.exception.ChefNotFoundException;
import com.example.BackEnd.model.Category;
import com.example.BackEnd.model.Chef;
import com.example.BackEnd.repository.CategoryRepository;
import com.example.BackEnd.repository.ChefRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/category")
    Category newCategory(@RequestBody Category newCategory){
        return categoryRepository.save(newCategory);
    }

    @GetMapping("/categories")
    List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{category_id}")
    Category getCategoryById(@PathVariable int category_id){
        return categoryRepository.findById(category_id)
                .orElseThrow(()->new ChefNotFoundException(category_id));
    }


    @PutMapping("/category/{category_id}")
    Category updateCategory(@RequestBody Category newCategory,@PathVariable int category_id){
        return categoryRepository.findById(category_id)
                .map(category -> {
                    category.setCategory_name(newCategory.getCategory_name());
                    category.setCategory_desc(newCategory.getCategory_desc());
                    return categoryRepository.save(category);
                }).orElseThrow(()->new ChefNotFoundException(category_id));
    }

    @DeleteMapping("category/{category_id}")
    String deleteChef(@PathVariable int category_id){
        if(!categoryRepository.existsById(category_id)){
            throw new ChefNotFoundException(category_id);
        }
        categoryRepository.deleteById(category_id);
        return "Category with id "+category_id+" has been deleted successfully.";
    }

}
