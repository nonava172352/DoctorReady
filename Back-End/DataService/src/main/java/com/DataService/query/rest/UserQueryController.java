package com.DataService.query.rest;

import com.DataService.Rabbit.LoginRestModel;
import com.DataService.query.AuthQuery;
import com.DataService.query.FindSymptomQuery;
import com.DataService.query.FindUserQuery;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//@RestController
@Service
public class UserQueryController {

    @Autowired
    QueryGateway queryGateway;

//    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @RabbitListener(queues = "LoginQueue")
    public Object getUsers(LoginRestModel model){
        AuthQuery authQuery = new AuthQuery(model);
            List<UserRestModel> users = queryGateway
                    .query(authQuery, ResponseTypes.multipleInstancesOf(UserRestModel.class)).join();
            return users.get(0);

    }@RabbitListener(queues = "UsersQueue")
    public Object getUsers(){
        FindUserQuery findUserQuery = new FindUserQuery();
        List<UserRestModel> users = queryGateway.query(findUserQuery, ResponseTypes.multipleInstancesOf(UserRestModel.class)).join();
        return users;

    }
    @RabbitListener(queues = "getSymQueue")
    public List<SymptomRestModel> getSymptom(){
        FindSymptomQuery findSymptomQuery = new FindSymptomQuery();
        List<SymptomRestModel> symptom = queryGateway.query(findSymptomQuery, ResponseTypes.multipleInstancesOf(SymptomRestModel.class)).join();
        System.out.println(symptom);
        return symptom;
    }
//    public List<UserRestModel> AuthLogin(){
//        FindUserQuery findUserQuery = new FindUserQuery();
//        List<UserRestModel> users =queryGateway
//                .query(findUserQuery, ResponseTypes.multipleInstancesOf(UserRestModel.class)).join();
//        return users;
//    }
}
