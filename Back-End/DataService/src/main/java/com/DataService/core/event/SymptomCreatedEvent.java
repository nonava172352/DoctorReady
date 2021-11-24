package com.DataService.core.event;

import lombok.Data;


@Data
public class SymptomCreatedEvent {
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private String haveFever;
    private String painPosition;
    private String drugAllergy;
    private String  more;
    private String email;
}
