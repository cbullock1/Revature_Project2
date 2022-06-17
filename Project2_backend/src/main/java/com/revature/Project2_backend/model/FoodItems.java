package com.revature.Project2_backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Data
@Table(name = "food")
public class FoodItems implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, unique = true)
  private Long foodId;
  @Column(nullable = false)
  private long categoryId;
  @Column(nullable = false, unique = true)
  private String name;
  private float price;
  private String description;
  private String picture;

  public FoodItems(String name, float price, String description, String picture, long categoryId) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.picture = picture;
    this.categoryId = categoryId;
  }
}
