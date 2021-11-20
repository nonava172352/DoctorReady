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
        List<UserEntity> storedUser = userRepository.findAll();
        for (UserEntity userEntity : storedUser){
            UserRestModel userRestModel = new UserRestModel();
            BeanUtils.copyProperties(userEntity, userRestModel);
            userRest.add(userRestModel);

        }
        return userRest;
    }

}
