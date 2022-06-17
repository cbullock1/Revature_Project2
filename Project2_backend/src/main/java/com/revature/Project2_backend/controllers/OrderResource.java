package com.revature.Project2_backend.controllers;
import com.revature.Project2_backend.model.Orders;
import com.revature.Project2_backend.model.forUser.User;
import com.revature.Project2_backend.service.OrdersService;
import com.revature.Project2_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Orders")
public class OrderResource {

  private final OrdersService ordersService;
  private final UserService userService;


  @GetMapping
  public ResponseEntity<List<Orders>> getOrders(){
    List<Orders> orders = ordersService.findAllOrders();
    return new ResponseEntity<>(orders, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Orders> addOrder(@RequestBody Orders order){
    User user = userService.findUserById(order.getUserId());
    Orders ordered;
    if(user != null){
      ordered = ordersService.addOrder(order);
    }
    else ordered = null;

    return new ResponseEntity<>(ordered, HttpStatus.CREATED);
  }

  @GetMapping("/orderId/{orderId}")
  public ResponseEntity<Orders> getOrder(@PathVariable("orderId") long orderId){
    Orders order = ordersService.findByOrderId(orderId);
    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @PutMapping
  public ResponseEntity<Orders> updateOrder(@RequestBody Orders upOrder){
    Orders updatedOrder = ordersService.updateOrder(upOrder);
    return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
  }
  @Transactional
  @DeleteMapping("/orderId/{orderId}")
  public ResponseEntity<?> deleteOrder(@PathVariable("orderId") long orderId) {
    ordersService.deleteOrders(orderId);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
