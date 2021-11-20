package com.DataService.query.rest;

import com.DataService.Rabbit.LoginRestModel;
import com.DataService.query.FindUserQuery;
import org.axonframework.messaging.responsetypes.ResponseType;
import org.axonframework.messaging.responsetypes.ResponseTypes;
import org.axonframework.queryhandling.QueryGateway;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

//@RestController
//@RequestMapping("users")
@Service
public class UserQueryController {

    @Autowired
    QueryGateway queryGateway;
//    @GetMapping
//    public List<UserRestModel> getUsers(){
//        FindUserQuery findUserQuery = new FindUserQuery();
//        List<UserRestModel> users = queryGateway
//                .query(findUserQuery, ResponseTypes.multipleInstancesOf(UserRestModel.class)).join();
//        return users;
//    }
    @RabbitListener(queues = "LoginQueue")
    public List<UserRestModel> AuthLogin(LoginRestModel model){
        FindUserQuery findUserQuery = new FindUserQuery(model);
        System.out.println("rabbit");
        List<UserRestModel> users =queryGateway
                .query(findUserQuery, ResponseTypes.multipleInstancesOf(UserRestModel.class)).join();
        return users;
    }
}
