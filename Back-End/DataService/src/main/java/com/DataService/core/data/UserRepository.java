package com.DataService.core.data;

import com.DataService.core.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    UserEntity findAllByUserID(String UserId);

    UserEntity findByEmail(String email);

}
