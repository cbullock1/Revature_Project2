package com.revature.Project2_backend.controllers;

import com.revature.Project2_backend.model.FoodItems;
import com.revature.Project2_backend.model.Orders;
import com.revature.Project2_backend.model.forCart.Cart;
import com.revature.Project2_backend.model.forCart.CartToken;
import com.revature.Project2_backend.service.CartService;
import com.revature.Project2_backend.service.FoodService;
import com.revature.Project2_backend.service.OrdersService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Cart")
public class CartResource {
  private final CartService cartService;
  private final FoodService foodService;
  private final OrdersService ordersService;

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
    if(cartsInOrder.size() != 0) return new ResponseEntity<>(cartsInOrder, HttpStatus.OK);
    else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @PostMapping("/add")
  public ResponseEntity<Cart> addCart(@RequestBody Cart cart){
    Orders findOrder = ordersService.findByOrderId(cart.getOrderId());
    FoodItems findFood = foodService.findByFoodId(cart.getFoodId());
    if(findOrder != null && findFood != null){
      Cart newCart = cartService.addCart(cart);
      return new ResponseEntity<>(newCart, HttpStatus.CREATED);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @Transactional
  @DeleteMapping("/DeleteOrderId/{orderId}")
  public ResponseEntity<?> deleteCartItemByOrderId(@PathVariable("orderId") Long orderId){
    List<Cart> carts = cartService.findAllCart();
    List<Cart> cartsInOrder = new ArrayList<>();
    for(Cart cart: carts) {
      if(cart.getOrderId() == orderId) cartsInOrder.add(cart);
    }
    if(cartsInOrder.size() != 0) {
      cartService.deleteByOrderId(orderId);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @Transactional
  @DeleteMapping("/DeleteCartId/{cartId}")
  public ResponseEntity<?> deleteCartItemBCartId(@PathVariable("cartId") Long cartId){
    Cart findCart = cartService.findByCartId(cartId);
    if(findCart != null){
      cartService.deleteByCartId(cartId);
      return new ResponseEntity<>(HttpStatus.OK);
    }
    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }

  @GetMapping("/CartItem/{orderId}")
  public ResponseEntity<List<CartToken>> getItemInCart(@PathVariable("orderId") Long orderId){
    List<Cart> carts = cartService.findAllCart();
    List<Cart> findCart = new ArrayList<>();
    List<CartToken> itemInCart = new ArrayList<>();
    for(Cart cart: carts) {
      if(cart.getOrderId() == orderId) findCart.add(cart);
    }
    if(findCart.size() !=0 ){
      for (Cart cart : findCart) {
        FoodItems food = foodService.findByFoodId(cart.getFoodId());
        CartToken token = new CartToken();
        token.setCartId(cart.getCartId());
        token.setOrderId(cart.getOrderId());
        token.setName(food.getName());
        token.setPrice(food.getPrice());
        itemInCart.add(token);
      }
      return new ResponseEntity<>(itemInCart, HttpStatus.OK);
    }
    else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
  }
}
