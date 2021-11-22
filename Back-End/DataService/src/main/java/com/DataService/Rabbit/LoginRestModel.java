package com.DataService.Rabbit;

import lombok.Data;

import java.io.Serializable;
@Data
public class LoginRestModel implements Serializable {
    private String email;
    private String password;

}
