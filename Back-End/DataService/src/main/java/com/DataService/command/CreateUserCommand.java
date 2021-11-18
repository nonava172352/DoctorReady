package com.DataService.command;

import lombok.Builder;
import lombok.Data;
import org.axonframework.modelling.command.TargetAggregateIdentifier;

@Builder
@Data
public class CreateUserCommand {
    @TargetAggregateIdentifier
    private final String UserID;
    private final String username;
    private final String password;
    private final String email;
    private final String name;
    private final Float weight;
    private final Float height;
    private final Integer age;
    private final String detail;
}
