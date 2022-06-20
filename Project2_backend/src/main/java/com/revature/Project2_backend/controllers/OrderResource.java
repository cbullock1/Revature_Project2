package com.revature.Project2_backend.controllers;
import com.revature.Project2_backend.model.forOrders.Orders;
import com.revature.Project2_backend.model.forCart.CartToken;
import com.revature.Project2_backend.model.forOrders.OrdersToken;
import com.revature.Project2_backend.model.forUser.User;
import com.revature.Project2_backend.service.CartService;
import com.revature.Project2_backend.service.FoodService;
import com.revature.Project2_backend.service.OrdersService;
import com.revature.Project2_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Orders")
public class OrderResource {

  private final OrdersService ordersService;
  private final UserService userService;
  private final CartService cartService;
  private final FoodService foodService;

  @GetMapping("/getOrderList")
  public ResponseEntity<List<Orders>> getOrders(){
    List<Orders> orders = ordersService.findAllOrders();
    if(orders.size() !=0) {
      return new ResponseEntity<>(orders, HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  @PostMapping("/addOrders")
  public ResponseEntity<Orders> addOrder(@RequestBody Orders order){
    User user = userService.findUserById(order.getUserId());
    if(user != null){
      List<Orders> userOrders = ordersForUser(order.getUserId());
      boolean hasPending = false;
      if(userOrders.size() != 0) {
        for(Orders orders: userOrders) {
          if (orders.getOrderStatus().equalsIgnoreCase("pending")) {
            hasPending = true;
            break;
          }
        }
      }
      if(!hasPending){
        return new ResponseEntity<>(ordersService.addOrder(order), HttpStatus.OK);
      }
    }
    return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
  }

  @GetMapping("/orderId/{orderId}")
  public ResponseEntity<Orders> getOrder(@PathVariable("orderId") long orderId){
    Orders order = ordersService.findByOrderId(orderId);
    if(order != null){
      return new ResponseEntity<>(order, HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  @PutMapping("/orderUpdate")
  public ResponseEntity<Orders> updateOrder(@RequestBody Orders upOrder){
    Orders findOrder = ordersService.findByOrderId(upOrder.getOrderId());
    if(findOrder != null){
      return new ResponseEntity<>(ordersService.updateOrder(upOrder), HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  @Transactional
  @DeleteMapping("/orderId/{orderId}")
  public ResponseEntity<?> deleteOrder(@PathVariable("orderId") long orderId) {
    Orders findOrder = ordersService.findByOrderId(orderId);
    if(findOrder != null){
      ordersService.deleteOrders(orderId);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
  }

  @GetMapping("/getByUser/{userId}")
  public ResponseEntity<List<Orders>> getByUserId(@PathVariable("userId") Long userId){
    List<Orders> byUser = ordersForUser(userId);
    if(byUser.size() != 0) return new ResponseEntity<>(byUser, HttpStatus.OK);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

  public List<Orders> ordersForUser(Long userId){
    List<Orders> orders = ordersService.findAllOrders();
    List<Orders> byUser = new ArrayList<>();
    for(Orders order: orders) if(order.getUserId() == userId) byUser.add(order);
    return byUser;
  }
}
