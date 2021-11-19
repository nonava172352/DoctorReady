package com.DataService.Rabbit;

import com.DataService.command.rest.CreateUserRestModel;
import com.DataService.command.rest.DataCommandController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
@RestController
public class Register {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping(value="/register", method = RequestMethod.POST)
    public CreateUserRestModel Register(@RequestBody CreateUserRestModel model){
        CreateUserRestModel m = (CreateUserRestModel) rabbitTemplate.convertSendAndReceive("Direct", "register", model);

}
