package com.DataService.core;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name = "users" )
@Data
public class UserEntity implements Serializable {
    private static final long serialVersionUID = -6677240663737728071L;
    @Id
    @Column(unique = true)
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
