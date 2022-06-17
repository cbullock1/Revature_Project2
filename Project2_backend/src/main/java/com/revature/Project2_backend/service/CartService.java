package com.revature.Project2_backend.service;

import com.revature.Project2_backend.customExceptions.CartNotFoundException;
import com.revature.Project2_backend.model.forCart.Cart;
import com.revature.Project2_backend.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
  private final CartRepo cartRepo;

  @Autowired
  public CartService(CartRepo cartRepo){
    this.cartRepo = cartRepo;
  }

  public Cart addCart(Cart cart){
    return cartRepo.save(cart);
  }

  public List<Cart> findAllCart(){
    return cartRepo.findAll();
  }

  public Cart findByCartId(Long cartId){
    return cartRepo.findBycartId(cartId).orElseThrow(() -> new CartNotFoundException("Cart ID " + cartId + " not found"));
  }
  public void deleteByCartId(Long cartId){
    cartRepo.deleteByCartId(cartId);
  }

  public void deleteByOrderId(Long orderId){
    cartRepo.deleteByOrderId(orderId);
  }

}
