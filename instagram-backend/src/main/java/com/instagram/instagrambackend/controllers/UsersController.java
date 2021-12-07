package com.instagram.instagrambackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.instagrambackend.entities.Users;
import com.instagram.instagrambackend.services.UsersService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/users")
public class UsersController {
	
	@Autowired
	UsersService usersService;
	
	@PostMapping("/")
	public Users submitUser(@RequestBody Users users) {
		return usersService.submitUsersMetadata(users);
	}
	
	@GetMapping("/{userId}")
	public Users getUserDetails(@PathVariable("userId") String userId) {
		return usersService.displayUsersMetadate(userId);
	}
	
	@PutMapping("/")
	public Users updateProfileImage(@RequestBody Users users) {
		return usersService.updateProfileImage(users.getUserId(), users.getProfileImage()	);
	}
}
