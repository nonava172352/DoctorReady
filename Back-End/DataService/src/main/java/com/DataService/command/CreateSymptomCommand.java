package com.DataService.command;

import lombok.Builder;
import lombok.Data;
import org.axonframework.modelling.command.TargetAggregateIdentifier;

import java.io.Serializable;
import java.util.ArrayList;

@Builder
@Data
public class CreateSymptomCommand implements Serializable{
    @TargetAggregateIdentifier
    private final String symptomID;
    private final String symptom;
    private final String symptomDuration;
    private final boolean haveFever;
    private final String  painPosition;
    private final String drugAllergy;
    private final String  more;
}
