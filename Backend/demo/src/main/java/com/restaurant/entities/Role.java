package com.restaurant.entities;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Role {

    private int id;
    private String name;

    public Role(int id, RoleType roleType) {
        this.id = id;
        name = roleType.getType();
    }
}