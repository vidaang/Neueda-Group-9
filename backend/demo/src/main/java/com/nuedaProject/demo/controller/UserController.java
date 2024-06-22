package com.nuedaProject.demo.controller;

import com.nuedaProject.demo.model.User;
import com.nuedaProject.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;

    // Return optional User and takes in user id of "id"
    @CrossOrigin(origins = "*")
    @GetMapping("{id}")
    public ResponseEntity<Optional<User>> findUserById(@PathVariable("id") Long id){
        Optional<User> user = userRepository.findById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // Return a list of all User inside the database
    @CrossOrigin(origins = "*")
    @GetMapping("")
    public ResponseEntity<List<User>> findAllUser(){
        List<User> users = userRepository.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

}
