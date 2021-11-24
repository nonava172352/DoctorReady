package com.DataService.query.rest;

import lombok.Data;

import java.io.Serializable;

@Data
public class SymptomRestModel implements Serializable {
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private String haveFever;
    private String painPosition;
    private String drugAllergy;
    private String more;
    private String email;
}
