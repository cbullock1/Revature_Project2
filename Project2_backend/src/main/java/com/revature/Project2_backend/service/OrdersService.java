package com.revature.Project2_backend.service;

import com.revature.Project2_backend.customExceptions.OrdersNotFoundException;
import com.revature.Project2_backend.model.forOrders.Orders;
import com.revature.Project2_backend.repo.OrdersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrdersService {
    private final OrdersRepo ordersRepo;

    @Autowired
    public OrdersService(OrdersRepo ordersRepo){
        this.ordersRepo = ordersRepo;
    }

    public Orders addOrder(Orders order){
        return ordersRepo.save(order);
    }

    public List<Orders> findAllOrders(){
        return ordersRepo.findAll();
    }

    public Orders updateOrder(Orders order){
        return ordersRepo.save(order);
    }

    public Orders findByOrderId(Long orderId){
        return ordersRepo.findByorderId(orderId).orElseThrow(() -> new OrdersNotFoundException("Order " + orderId + " do not exists"));
    }

    public void deleteOrders(Long orderId){
        ordersRepo.deleteOrderByorderId(orderId);
    }
}
