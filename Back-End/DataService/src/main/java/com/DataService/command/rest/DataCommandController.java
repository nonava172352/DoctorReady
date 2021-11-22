package com.DataService.command.rest;

import com.DataService.command.CreateUserCommand;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

//@RestController
//@RequestMapping("/Register")
@Service
public class DataCommandController {
    private final CommandGateway commandGateway;

    @Autowired
    public DataCommandController(CommandGateway commandGateway) {
        this.commandGateway = commandGateway;
    }



    @RabbitListener(queues = "RegisterQueue")
    public String createUsers(CreateUserRestModel model){
        CreateUserCommand command = CreateUserCommand.builder()
                .userID(UUID.randomUUID().toString())
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
            System.out.println(result);
            System.out.println(command.getUsername());
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
