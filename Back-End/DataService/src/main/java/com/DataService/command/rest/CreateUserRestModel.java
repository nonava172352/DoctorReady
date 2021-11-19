package com.DataService.command.rest;

import lombok.Data;

import java.io.Serializable;

@Data
public class CreateUserRestModel implements Serializable {
    private String userID;
    private String username;
    private String password;
    private String email;
    private String name;
    private Float weight;
    private Float height;
    private Integer age;
    private String detail;


}
