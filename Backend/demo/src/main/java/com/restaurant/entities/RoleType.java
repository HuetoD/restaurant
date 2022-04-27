package com.restaurant.entities;

public enum RoleType {
    
    ADMIN("admin");

    RoleType(String type) {this.type = type;}

    private String type;

    public String getType() {return type;}
}
