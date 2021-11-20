package com.DataService.Rabbit;

import com.DataService.ReadFileJson;
import com.DataService.command.CreateUserCommand;
import com.DataService.command.rest.CreateUserRestModel;
import com.DataService.command.rest.DataCommandController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import java.util.ArrayList;

@RestController
public class Requestandreply {
    @Autowired
    private RabbitTemplate rabbitTemplate;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public String Register(@RequestBody CreateUserRestModel model) {
        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "register", model);

        return m;
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String Login(@RequestBody LoginRestModel model){
        System.out.println("login");
        String m = (String) rabbitTemplate.convertSendAndReceive("Direct" ,"login", model);
        return  m;
    }

    @GetMapping(value = "/disease")
    public ArrayList getDisease(){
        System.out.println("/disease");
        return new ReadFileJson().getReadFileJson();

    }
    @GetMapping(value = "findsymptom/{n1}")
    public ArrayList getFindsymptom(@PathVariable("n1") String n1){
        return new ReadFileJson().getFindSymptom(n1);
    }
    @GetMapping(value = "disease/{n1}")
    public Object getDisease(@PathVariable("n1") String n1){
        return new ReadFileJson().getReadFileJson(n1);
    }
}