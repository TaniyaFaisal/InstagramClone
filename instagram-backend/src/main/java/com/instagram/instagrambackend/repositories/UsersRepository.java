package com.instagram.instagrambackend.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.instagram.instagrambackend.entities.Users;

@Repository
public interface UsersRepository extends CrudRepository<Users, Integer>{
	Users save(Users users);
	Users findByUserId(String userId);
	
}
