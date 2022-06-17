package com.revature.Project2_backend.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@NoArgsConstructor
@Data
@Table(name = "category")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false, name = "catId")
    private long catId;
    @Column(unique = true)
    private String catName;

  public Category(String catName) {
    this.catName = catName;
  }
}
