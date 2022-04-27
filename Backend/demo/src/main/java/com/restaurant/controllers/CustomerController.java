package com.restaurant.controllers;

import com.restaurant.entities.Customer;
import com.restaurant.services.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/restaurant-api")
public class CustomerController {
    
    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @PostMapping("/customers")
    public ResponseEntity<Customer> saveCustomer(@RequestBody Customer customer) {
        Customer savedCustomer = null;
        if((savedCustomer = customerService.save(customer)) != null) 
            return new ResponseEntity<Customer>(savedCustomer, HttpStatus.CREATED);
        else 
            return new ResponseEntity<Customer>(savedCustomer, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
