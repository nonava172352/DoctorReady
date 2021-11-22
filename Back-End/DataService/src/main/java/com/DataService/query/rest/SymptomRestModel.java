package com.DataService.query.rest;

import lombok.Data;

@Data
public class SymptomRestModel {
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private boolean haveFever;
    private String painPosition;
    private String drugAllergy;
    private String more;
}
