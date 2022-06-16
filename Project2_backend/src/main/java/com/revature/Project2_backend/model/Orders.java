package com.revature.Project2_backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Data
@Table(name = "orders")
public class Orders implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private long orderId;
    @Column(nullable = false)
    private long userId;
    private String orderStatus;

  public Orders(long userId, String orderStatus){
    this.userId = userId;
    this.orderStatus = orderStatus;
  }
}
