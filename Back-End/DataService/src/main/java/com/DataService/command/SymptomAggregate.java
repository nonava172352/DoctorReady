package com.DataService.command;

import com.DataService.core.event.SymptomCreatedEvent;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;
import org.springframework.beans.BeanUtils;

import java.util.ArrayList;

@Aggregate
public class SymptomAggregate {
    @AggregateIdentifier
    private String symptomID;
    private String symptom;
    private String symptomDuration;
    private boolean haveFever;
    private String painPosition;
    private String drugAllergy;
    private String more;

    public SymptomAggregate(){
    }


    @CommandHandler
    public SymptomAggregate(CreateSymptomCommand createSymptomCommand){
        if(createSymptomCommand.getSymptom().equals("") == true){
            throw new IllegalArgumentException("Symptom == null");
        }
        System.out.println(createSymptomCommand);
        System.out.println("createSymptomCommand");
        SymptomCreatedEvent symptomCreatedEvent = new SymptomCreatedEvent();
        BeanUtils.copyProperties(createSymptomCommand, symptomCreatedEvent);
        AggregateLifecycle.apply(symptomCreatedEvent);

    }
    @EventSourcingHandler
    public void on(SymptomCreatedEvent SymptomCreatedEvent){
        this.symptomID = SymptomCreatedEvent.getSymptomID();
        this.symptom = SymptomCreatedEvent.getSymptom();
        this.symptomDuration = SymptomCreatedEvent.getSymptomDuration();
        this.haveFever = SymptomCreatedEvent.isHaveFever();
        this.painPosition = SymptomCreatedEvent.getPainPosition();
        this.drugAllergy = SymptomCreatedEvent.getDrugAllergy();
        this.more = SymptomCreatedEvent.getMore();
    }

}

