package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.FoodItems;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepo extends JpaRepository<FoodItems, Long> {
    Optional<FoodItems> findByfoodId(Long foodId);

    Optional<List<FoodItems>> findBycategoryId(Long categoryId);

    void deleteByfoodId(Long foodId);
}
