package com.DataService.rest;

import lombok.Data;

@Data
public class CreateUserRestModel {
    private String username;
    private String password;
    private String email;
    private String name;
    private Float weight;
    private Float height;
    private Integer age;
    private String detail;
}
