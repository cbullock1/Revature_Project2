package com.revature.Project2_backend.controllers;
import com.revature.Project2_backend.model.Orders;
import com.revature.Project2_backend.model.forUser.User;
import com.revature.Project2_backend.service.OrdersService;
import com.revature.Project2_backend.service.UserService;
import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
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


  @GetMapping("/getOrderList")
  public ResponseEntity<List<Orders>> getOrders(){
    List<Orders> orders = ordersService.findAllOrders();
    return new ResponseEntity<>(orders, HttpStatus.OK);
  }

  @PostMapping("/addOrders")
  public ResponseEntity<Orders> addOrder(@RequestBody Orders order){
    User user = userService.findUserById(order.getUserId());
    if(user != null){
      return new ResponseEntity<>(ordersService.addOrder(order), HttpStatus.OK);
    }
    else
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping("/orderId/{orderId}")
  public ResponseEntity<Orders> getOrder(@PathVariable("orderId") long orderId){
    Orders order = ordersService.findByOrderId(orderId);
    return new ResponseEntity<>(order, HttpStatus.OK);
  }

  @PutMapping("/orderUpdate")
  public ResponseEntity<Orders> updateOrder(@RequestBody Orders upOrder){
    Orders findOrder = ordersService.findByOrderId(upOrder.getOrderId());
    if(findOrder != null){
      return new ResponseEntity<>(ordersService.updateOrder(upOrder), HttpStatus.OK);
    }
    else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
  @Transactional
  @DeleteMapping("/orderId/{orderId}")
  public ResponseEntity<?> deleteOrder(@PathVariable("orderId") long orderId) {
    Orders findOrder = ordersService.findByOrderId(orderId);
    if(findOrder != null){
      ordersService.deleteOrders(orderId);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
