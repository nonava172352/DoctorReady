package com.DataService.query;

import com.DataService.Rabbit.LoginRestModel;
import lombok.Data;

@Data
public class AuthQuery {
    private String email;
    private String password;

    public AuthQuery(LoginRestModel model){
        this.email = model.getEmail();
        this.password = model.getPassword();

    }


}
