package com.DataService.query;

import com.DataService.core.SymptomEntity;
import com.DataService.core.data.SymptomRepository;
import com.DataService.core.event.SymptomCreatedEvent;
import org.axonframework.eventhandling.EventHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class SymptomEventsHandler {

    private final SymptomRepository symptomRepository;

    public SymptomEventsHandler(SymptomRepository symptomRepository){
        this.symptomRepository = symptomRepository;

    }

    @EventHandler
    public void on(SymptomCreatedEvent event){
        SymptomEntity symptomEntity = new SymptomEntity();
        BeanUtils.copyProperties(event, symptomEntity);
        symptomRepository.save(symptomEntity);
    }

}
