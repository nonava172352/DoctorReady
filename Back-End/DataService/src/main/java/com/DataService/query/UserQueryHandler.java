package com.DataService.query;

import com.DataService.core.UserEntity;
import com.DataService.core.data.UserRepository;
import com.DataService.query.rest.UserRestModel;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserQueryHandler {

    private final UserRepository userRepository;

    public UserQueryHandler(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @QueryHandler
    List<UserRestModel> findUsers(FindUserQuery query){
        List<UserRestModel> userRest = new ArrayList<>();
        System.out.println(query.getEmail() + query.getPassword() + "Query");
        UserEntity storedUser = userRepository.findByEmail(query.getEmail());

        UserRestModel userRestModel = new UserRestModel();
        BeanUtils.copyProperties(storedUser, userRestModel);
        userRest.add(userRestModel);

            return userRest;
    }

}
