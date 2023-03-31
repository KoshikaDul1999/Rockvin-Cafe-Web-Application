package com.example.BackEnd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Admin {
    @Id
    @GeneratedValue
    private int admin_id;
    private String admin_username;
    private String admin_password;
    private String admin_name;

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }

    public String getAdmin_username() {
        return admin_username;
    }

    public void setAdmin_username(String admin_username) {
        this.admin_username = admin_username;
    }

    public String getAdmin_password() {
        return admin_password;
    }

    public void setAdmin_password(String admin_password) {
        this.admin_password = admin_password;
    }

    public String getAdmin_name() {
        return admin_name;
    }

    public void setAdmin_name(String admin_name) {
        this.admin_name = admin_name;
    }
}
