package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.forCart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
  Optional<Cart> findBycartId(Long cartId);
  void deleteByCartId(Long cartId);
  void deleteByOrderId(Long orderId);
}
