package com.DataService.query;

import com.DataService.core.UserEntity;
import com.DataService.core.data.UserRepository;
import com.DataService.core.event.UserCreatedEvent;
import org.axonframework.eventhandling.EventHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class UserEventsHandler {

    private final UserRepository userRepository;

    public UserEventsHandler(UserRepository userRepository){
        this.userRepository = userRepository;
        System.out.println(this.userRepository);

    }

    @EventHandler
    public void on(UserCreatedEvent event){
        System.out.println(event);
        UserEntity userEntity = new UserEntity();
        BeanUtils.copyProperties(event, userEntity);
        userRepository.save(userEntity);
    }

}
