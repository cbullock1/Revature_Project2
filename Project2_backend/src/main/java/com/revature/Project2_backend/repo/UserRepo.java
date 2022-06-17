package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.forUser.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
  void deleteUserByuserId(Long userId);

  Optional<User> findUserByuserId(Long userId);

  Optional<User> findUserByEmailAndPassword(String email, String password);
}
