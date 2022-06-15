package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.User;
import com.revature.Project2_backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Users")
public class UserResource {
    private final UserService userService;

    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/findUser/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") Long userId){
        User user = userService.findUserById(userId);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<User> addUser(@RequestBody User regUser){
        User user = userService.addUser(regUser);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }

    @PutMapping("/userUpdate")
    public ResponseEntity<User> updateUser(@RequestBody User updatedUser){
        User user = userService.updateUser(updatedUser);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @DeleteMapping("/userDelete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}
