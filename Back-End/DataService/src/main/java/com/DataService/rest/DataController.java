package com.DataService.rest;

import com.DataService.command.CreateUserCommand;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/Register")
public class DataController {
    private final CommandGateway commandGateway;

    @Autowired
    public DataController(CommandGateway commandGateway) {
        this.commandGateway = commandGateway;
    }

    @PostMapping
    public String createUsers(@RequestBody CreateUserRestModel model){
        CreateUserCommand command = CreateUserCommand.builder()
                .UserID(UUID.randomUUID().toString())
                .username(model.getUsername())
                .password(model.getPassword())
                .email(model.getEmail())
                .name(model.getName())
                .weight(model.getWeight())
                .height(model.getHeight())
                .age(model.getAge())
                .detail(model.getDetail())
                .build();
        String result;
        try{
            result = commandGateway.sendAndWait(command);
        }catch (Exception e){
            result = e.getLocalizedMessage();
        }
        return result;
    }
    @DeleteMapping
    public String deleteUsers(){
        return "DeleteUser";
    }
}
