package com.example.BackEnd.controller;

import com.example.BackEnd.exception.AdminNotFoundException;
import com.example.BackEnd.model.Admin;
import com.example.BackEnd.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/admin")
    Admin newAdmin(@RequestBody Admin newAdmin){
        return adminRepository.save(newAdmin);
    }

    @GetMapping("/admins")
    List<Admin> getAllAdmins(){
        return adminRepository.findAll();
    }

    @GetMapping("/admin/{id}")
    Admin getAdminById(@PathVariable int id){
        return adminRepository.findById(id)
                .orElseThrow(()->new AdminNotFoundException(id));
    }

    @PutMapping("/admin/{id}")
    Admin updateAdmin(@RequestBody Admin newAdmin,@PathVariable int id){
        return adminRepository.findById(id)
                .map(admin -> {
                    admin.setAdmin_username(newAdmin.getAdmin_username());
                    admin.setAdmin_name(newAdmin.getAdmin_name());
                    admin.setAdmin_password(newAdmin.getAdmin_password());
                    admin.setAdmin_email(newAdmin.getAdmin_email());
                    return adminRepository.save(admin);
                }).orElseThrow(()->new AdminNotFoundException(id));
    }

    @DeleteMapping("admin/{id}")
    String deleteAdmin(@PathVariable int id){
        if(!adminRepository.existsById(id)){
            throw new AdminNotFoundException(id);
        }
        adminRepository.deleteById(id);
        return "Admin with id "+id+" has been deleted successfully.";
    }

}
