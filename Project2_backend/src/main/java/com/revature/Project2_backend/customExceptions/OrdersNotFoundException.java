package com.revature.Project2_backend.customExceptions;

public class OrdersNotFoundException extends RuntimeException{
    public OrdersNotFoundException(String message){super(message);}
}
