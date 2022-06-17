package com.revature.Project2_backend.customExceptions;

public class CartNotFoundException extends RuntimeException{
  public CartNotFoundException(String message){ super(message);}
}
