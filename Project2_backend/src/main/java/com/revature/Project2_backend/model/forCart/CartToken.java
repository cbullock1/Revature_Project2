package com.revature.Project2_backend.model.forCart;

import lombok.Data;

@Data
public class CartToken {
  private long cartId;
  private long orderId;
  private String name;
  private double price;
}
