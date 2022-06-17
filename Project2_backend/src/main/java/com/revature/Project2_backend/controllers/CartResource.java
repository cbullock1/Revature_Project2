package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.Cart;
import com.revature.Project2_backend.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Cart")
public class CartResource {
  private final CartService cartService;

  public CartResource(CartService cartService){
    this.cartService = cartService;
  }


  @GetMapping("/getAll")
  public ResponseEntity<List<Cart>> getAllCart(){
    List<Cart> carts = cartService.findAllCart();
    return new ResponseEntity<>(carts, HttpStatus.OK);
  }

  @GetMapping("/getCart/{orderId}")
  public ResponseEntity<List<Cart>> getCartByOrder(@PathVariable("orderId") Long orderId){
    List<Cart> carts = cartService.findAllCart();
    List<Cart> cartsInOrder = new ArrayList<>();
    for(Cart cart: carts) {
      if(cart.getOrderId() == orderId) cartsInOrder.add(cart);
    }
    return new ResponseEntity<>(cartsInOrder, HttpStatus.OK);
  }

  @PostMapping("/add")
  public ResponseEntity<Cart> addCart(@RequestBody Cart cart){
    Cart newCart = cartService.addCart(cart);
    return new ResponseEntity<>(newCart, HttpStatus.CREATED);
  }

  @Transactional
  @DeleteMapping("/DeleteOrderId/{orderId}")
  public ResponseEntity<?> deleteCartItemByOrderId(@PathVariable("orderId") Long orderId){
    cartService.deleteByOrderId(orderId);
    return new ResponseEntity<>(HttpStatus.OK);
  }

  @Transactional
  @DeleteMapping("/DeleteCartId/{cartId}")
  public ResponseEntity<?> deleteCartItemBCartId(@PathVariable("cartId") Long cartId){
    cartService.deleteByCartId(cartId);
    return new ResponseEntity<>(HttpStatus.OK);
  }
}
