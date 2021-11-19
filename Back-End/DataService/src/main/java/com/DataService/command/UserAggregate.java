package com.DataService.command;

import com.DataService.core.event.UserCreatedEvent;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.springframework.beans.BeanUtils;

@Aggregate
public class UserAggregate {
    @AggregateIdentifier
    private String userID;
    private String username;
    private String password;
    private String email;
    private String name;
    private Float weight;
    private Float height;
    private Integer age;
    private String detail;

    public UserAggregate(){
    }


    @CommandHandler
    public UserAggregate(CreateUserCommand createUserCommand){
        if(createUserCommand.getUsername().equals("") == true){
            throw new IllegalArgumentException("USer == null");
        }
        UserCreatedEvent userCreatedEvent = new UserCreatedEvent();
        BeanUtils.copyProperties(createUserCommand, userCreatedEvent);
        AggregateLifecycle.apply(userCreatedEvent);

    }
    @EventSourcingHandler
    public void on(UserCreatedEvent userCreatedEvent){
        this.userID = userCreatedEvent.getUserID();
        this.username = userCreatedEvent.getUsername();
        this.password = userCreatedEvent.getPassword();
        this.email = userCreatedEvent.getEmail();
        this.name = userCreatedEvent.getName();
        this.weight = userCreatedEvent.getWeight();
        this.height = userCreatedEvent.getHeight();
        this.age = userCreatedEvent.getAge();
        this.detail = userCreatedEvent.getDetail();
    }

}

