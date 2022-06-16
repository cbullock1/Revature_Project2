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
  private long cartID;
  @Column(nullable = false)
  private long orderID;
  @Column(nullable = false)
  private long foodID;

  public Cart(long orderID, long foodID) {
    this.orderID = orderID;
    this.foodID = foodID;
  }
}
