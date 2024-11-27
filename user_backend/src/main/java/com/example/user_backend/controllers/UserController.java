package com.example.user_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.user_backend.models.UserClass;
import com.example.user_backend.models.data.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5137")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<UserClass> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public UserClass createUser(@RequestBody UserClass user) {
        return userRepository.save(user);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserClass> getUserById(@PathVariable int id) {
        return userRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
    
}
