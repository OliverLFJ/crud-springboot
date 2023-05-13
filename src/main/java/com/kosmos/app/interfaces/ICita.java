package com.kosmos.app.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.kosmos.app.model.Cita;

@Repository
public interface ICita extends CrudRepository<Cita, Integer> {

}
