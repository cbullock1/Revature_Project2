package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    void deleteUserByuserId(Long userId);

    Optional<User> findUserByuserId(Long userId);
}
