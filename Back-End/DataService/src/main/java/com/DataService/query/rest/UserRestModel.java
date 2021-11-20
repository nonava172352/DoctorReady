package com.DataService.query.rest;

import lombok.Data;

@Data
public class UserRestModel {
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
