package com.revature.Project2_backend.model.forUser;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
@Entity
@NoArgsConstructor
@Data
@Table(name = "user")
public class User implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(nullable = false, updatable = false)
  private long userId;
  private String name;
  @Column(nullable = false, unique = true)
  private String email;
  private String password;
  private String address;
  private String state;
  private String city;
  private String zip;
  @Column(nullable = false, unique = true)
  private String phone;

  public User(String name, String email, String password, String address, String state, String city, String zip, String phone) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.address = address;
    this.state = state;
    this.city = city;
    this.zip = zip;
    this.phone = phone;
  }
}
