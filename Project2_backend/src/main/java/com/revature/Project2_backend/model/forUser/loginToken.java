package com.revature.Project2_backend.model.forUser;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class loginToken {
    private String email;
    private String password;

}
