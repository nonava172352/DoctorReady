package com.DataService.event;

import lombok.Data;

@Data
public class UserCreatedEvent {
    private String UserID;
    private String username;
    private String password;
    private String email;
    private String name;
    private Float weight;
    private Float height;
    private Integer age;
    private String detail;
}
