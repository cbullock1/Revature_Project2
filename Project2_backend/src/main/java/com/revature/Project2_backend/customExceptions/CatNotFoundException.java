package com.revature.Project2_backend.customExceptions;

public class CatNotFoundException extends RuntimeException{
  public CatNotFoundException(String message){ super(message);}
}
