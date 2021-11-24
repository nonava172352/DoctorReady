package com.DataService.core;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "symptom" )
@Data
public class SymptomEntity implements Serializable {
    private static final long serialVersionUID = -8182200971040743267L;
    @Id
    @Column(unique = true)
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private String haveFever;
    private String  painPosition;
    private String drugAllergy;
    private String  more;
    private String email;


}
