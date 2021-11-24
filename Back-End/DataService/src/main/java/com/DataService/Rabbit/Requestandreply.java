package com.DataService.Rabbit;

import com.DataService.ReadFileJson;
import com.DataService.command.CreateUserCommand;
import com.DataService.command.rest.CreateSymptomRestModel;
import com.DataService.command.rest.CreateUserRestModel;
import com.DataService.command.rest.DataCommandController;
import com.DataService.query.rest.SymptomRestModel;
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
    public UserRestModel Register(@RequestBody CreateUserRestModel model) {
        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "register", model);
        UserRestModel userRest = new UserRestModel();
        List<UserRestModel> alldata = (List<UserRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "users", "");
        for (UserRestModel i : alldata){
            if(i.getUserID().equals(m)){
                System.out.println(i);
                userRest = i;
            }
        }
        return userRest;
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

    @PostMapping(value = "/symptom")
    public String setSymtom(@RequestBody CreateSymptomRestModel model){
        System.out.println("Symtom");

        String m = (String) rabbitTemplate.convertSendAndReceive("Direct", "symptom", model);
      return m;
    };
    @GetMapping(value="/check/{email}" )
    public String getCheck(@PathVariable String email){
        List<UserRestModel> m = (List<UserRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "users", "");
        for (UserRestModel i : m){
            if(i.getEmail().equals(email)){
                return "false";
            }
        }

        return "true";
    }
    @GetMapping(value = "getSymtom/{email}")
    public SymptomRestModel getSymtom(@PathVariable("email") String email){
        System.out.println(email);
        List<SymptomRestModel> m = (List<SymptomRestModel>) rabbitTemplate.convertSendAndReceive("Direct", "getsymp", "");
        SymptomRestModel result = null;
        for(SymptomRestModel s: m){
            if(s.getEmail().equals(email)){
                result = s;
                break;
            }

        }

        return result;

    }

}