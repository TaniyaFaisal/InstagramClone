package com.instagram.instagrambackend.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instagram.instagrambackend.entities.Status;
import com.instagram.instagrambackend.repositories.StatusRepository;

@Service
public class StatusService {
	
	@Autowired
	StatusRepository statusRepository;
	
	@Autowired
	UsersService usersService;

	public Status submitStatusData(Status status) {
		status.setUsername(usersService.displayUsersMetadate(status.getUserId()).getUserName());
		status.setUserImage(usersService.displayUsersMetadate(status.getUserId()).getProfileImage());
		return statusRepository.save(status);
	}
	
	public ArrayList<Status> retrieveStatus(){
		ArrayList<Status> list = statusRepository.findAll();
//		for(Status status: list) {
//			status.setUsername(usersService.displayUsersMetadate(status.getUserId()).getUserName());
//		}
		return list;
	}
	
	public ArrayList<Status> retrieveAllStatus(String userId) {
		return statusRepository.findAllByUserId(userId);
	}

}
