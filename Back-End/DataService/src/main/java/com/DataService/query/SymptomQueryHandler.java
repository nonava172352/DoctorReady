package com.DataService.query;

import com.DataService.core.SymptomEntity;
import com.DataService.core.data.SymptomRepository;
import com.DataService.query.rest.SymptomRestModel;
import org.axonframework.queryhandling.QueryHandler;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SymptomQueryHandler {

    private final SymptomRepository symptomRepository;

    public SymptomQueryHandler(SymptomRepository symptomRepository){
        this.symptomRepository = symptomRepository;
    }

    @QueryHandler
    List<SymptomRestModel> findSymptom(FindSymptomQuery query){
        List<SymptomRestModel> symptomRest = new ArrayList<>();
        List<SymptomEntity> storedSymptom = symptomRepository.findAll();
        for (SymptomEntity symptomEntity : storedSymptom){
            SymptomRestModel symptomRestModel = new SymptomRestModel();
            BeanUtils.copyProperties(symptomEntity, symptomRestModel);
            symptomRest.add(symptomRestModel);

        }
        return symptomRest;
    }

}
