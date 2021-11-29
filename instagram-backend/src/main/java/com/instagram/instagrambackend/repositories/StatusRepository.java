package com.instagram.instagrambackend.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.instagram.instagrambackend.entities.Status;

@Repository
public interface StatusRepository  extends CrudRepository<Status, Integer>{

	Status save(Status status);
	ArrayList<Status> findAll();
}
