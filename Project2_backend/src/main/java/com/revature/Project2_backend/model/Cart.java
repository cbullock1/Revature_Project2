package com.revature.Project2_backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Data
@Table(name = "cart")
public class Cart implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, unique = true)
  private long cartId;
  @Column(nullable = false)
  private long orderId;
  @Column(nullable = false)
  private long foodId;

  public Cart(long orderId, long foodId) {
    this.orderId = orderId;
    this.foodId = foodId;
  }
}
