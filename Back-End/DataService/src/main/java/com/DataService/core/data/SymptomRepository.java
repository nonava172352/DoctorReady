package com.DataService.core.data;


import com.DataService.core.SymptomEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SymptomRepository extends JpaRepository<SymptomEntity, String> {
//    SymptomEntity findAllBySymptom(String symptom);

}
