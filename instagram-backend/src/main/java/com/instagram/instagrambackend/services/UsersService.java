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
		return usersRepository.save(users);
	}
	
	public Users updateProfileImage(String userId, String path) {
		Users users = usersRepository.findByUserId(userId);
		users.setProfileImage(path);
		usersRepository.save(users);
		return users;
	}
	
	public Users displayUsersMetadate(String userId) {
		return usersRepository.findByUserId(userId);
	}
}
