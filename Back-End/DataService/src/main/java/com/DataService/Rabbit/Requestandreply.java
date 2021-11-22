package com.DataService.Rabbit;

import com.DataService.ReadFileJson;
import com.DataService.command.CreateUserCommand;
import com.DataService.command.rest.CreateSymptomRestModel;
import com.DataService.command.rest.CreateUserRestModel;
import com.DataService.command.rest.DataCommandController;
import com.DataService.query.rest.UserRestModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.amqp.rabbit.core.RabbitTemplate;

import java.util.ArrayList;
import java.util.List;

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
    public Object Login(@RequestBody LoginRestModel model){
        System.out.println("login");
        List<UserRestModel> userRest = new ArrayList<>();
        userRest.add((UserRestModel) rabbitTemplate.convertSendAndReceive("Direct" ,"login", model));
        return userRest.get(0);
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

    @PostMapping(value = "symptom")
    public String setSymtom(@RequestBody CreateSymptomRestModel model){
        System.out.println("Symtom");

        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "symptom", model);
      return m;
    };


}