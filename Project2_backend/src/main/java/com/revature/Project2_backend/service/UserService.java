package com.revature.Project2_backend.service;

import com.revature.Project2_backend.customExceptions.UserNotFoundException;
import com.revature.Project2_backend.model.forUser.User;
import com.revature.Project2_backend.model.forUser.UserToken;
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

  public UserToken findUserbyemailANDpassword(String email, String password){
    User user = userRepo.findUserByEmailAndPassword(email,password)
      .orElseThrow(() -> new UserNotFoundException("User login failed"));
    UserToken userToken = new UserToken(user);
    return userToken;
  }
}
