package com.revature.Project2_backend.service;

import com.revature.Project2_backend.customExceptions.UserNotFoundException;
import com.revature.Project2_backend.model.User;
import com.revature.Project2_backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;
    @Autowired
    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    public User addUser(User user){
        user.setName("Mark");
        user.setEmail("m@gmail.com");
        user.setPassword("test");
        user.setAddress("test");
        user.setCity("Rev");
        user.setPhone("test");
        user.setState("IDK");
        user.setZip("01");
        return userRepo.save(user);
    }
    public List<User> getUsers(){
        return userRepo.findAll();
    }

    public User findUserById(final Long userId){
        return userRepo.findUserByuserId(userId)
                .orElseThrow(() -> new UserNotFoundException("User Id " + userId + " was not found"));
    }

    public User updateUser(User user){
        return userRepo.save(user);
    }
    public void deleteUser(Long userId){
        userRepo.deleteUserByuserId(userId);
    }
}
