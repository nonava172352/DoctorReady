package com.DataService.query;

import com.DataService.Rabbit.LoginRestModel;
import lombok.Data;

@Data
public class FindUserQuery {
    private String email;
    private String password;


    public FindUserQuery(LoginRestModel model){
        this.email = model.getEmail();
        this.password = model.getPassword();

    }

}
