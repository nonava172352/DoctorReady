package com.DataService.command.rest;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;

@Data
public class CreateSymptomRestModel implements Serializable {
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private boolean haveFever;
    private String painPosition;
    private String drugAllergy;
    private String more;


}