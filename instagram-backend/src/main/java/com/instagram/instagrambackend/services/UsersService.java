package com.instagram.instagrambackend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instagram.instagrambackend.entities.Users;
import com.instagram.instagrambackend.repositories.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	UsersRepository usersRepository;
	public Users submitUsersMetadata(Users users) {
		System.out.println(users);
		return usersRepository.save(users);
	}
	
	public Users displayUsersMetadate(String userId) {
		return usersRepository.findByUserId(userId);
	}
}
