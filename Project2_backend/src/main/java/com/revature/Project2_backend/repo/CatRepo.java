package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CatRepo extends JpaRepository<Category, Long> {
    Optional<Category> findBycatId(Long catId);
    void deleteBycatId(Long catId);

}
