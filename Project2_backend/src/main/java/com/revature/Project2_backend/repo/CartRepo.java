package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
  void deleteBycartId(Long foodId);
  void deleteByorderId(Long orderId);
}
