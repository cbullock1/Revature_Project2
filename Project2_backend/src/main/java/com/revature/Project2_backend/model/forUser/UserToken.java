package com.revature.Project2_backend.model.forUser;

import lombok.Data;

@Data
public class UserToken {
    private long userId;
    private String name;
    private String phone;
    private String email;
    private String address;
    private String state;
    private String city;
    private String zip;

    public UserToken(User user) {
        this.userId = user.getUserId();
        this.name = user.getName();
        this.phone = user.getPhone();
        this.email = user.getEmail();
        this.address = user.getAddress();
        this.state = user.getState();
        this.city = user.getCity();
        this.zip = user.getZip();
    }

}
