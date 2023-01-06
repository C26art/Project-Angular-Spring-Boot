package com.club.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.club.model.Users;
import com.club.repository.UserRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/users")
@AllArgsConstructor
public class UserController {

    private final UserRepository userRepository;

    @GetMapping
    public List<Users> list() {
        return userRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Users> create(@RequestBody Users users) {
       return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(users));
    }
    
}
