package com.revature.Project2_backend.customExceptions;

public class FoodItemNotFoundException extends RuntimeException{
  public FoodItemNotFoundException(String message){ super(message);}
}
