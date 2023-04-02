package com.example.BackEnd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Chef {
    @Id
    @GeneratedValue
    private int chef_id;
    private String chef_username;
    private String chef_password;
    private String chef_name;
    private String chef_email;

    public int getChef_id() {
        return chef_id;
    }

    public void setChef_id(int chef_id) {
        this.chef_id = chef_id;
    }

    public String getChef_username() {
        return chef_username;
    }

    public void setChef_username(String chef_username) {
        this.chef_username = chef_username;
    }

    public String getChef_password() {
        return chef_password;
    }

    public void setChef_password(String chef_password) {
        this.chef_password = chef_password;
    }

    public String getChef_name() {
        return chef_name;
    }

    public void setChef_name(String chef_name) {
        this.chef_name = chef_name;
    }

    public String getChef_email() {
        return chef_email;
    }

    public void setChef_email(String chef_email) {
        this.chef_email = chef_email;
    }
}
