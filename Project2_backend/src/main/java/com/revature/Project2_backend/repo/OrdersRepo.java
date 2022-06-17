package com.revature.Project2_backend.repo;

import com.revature.Project2_backend.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrdersRepo extends JpaRepository<Orders, Long> {
    Optional<Orders> findByorderId(Long orderId);
    void deleteOrderByorderId(Long orderId);
}
