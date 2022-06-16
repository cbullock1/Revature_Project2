package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart, Long> {
    Optional<Cart> findByorderId(Long orderId);
    void deleteCartByorderId(Long orderId);
    void deleteCartByfoodId(Long foodId);
}
