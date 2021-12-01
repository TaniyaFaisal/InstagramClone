package com.instagram.instagrambackend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.instagrambackend.entities.Status;
import com.instagram.instagrambackend.services.StatusService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/status")
public class StatusController {

	@Autowired
	StatusService statusService;
	
	@PostMapping("/")
	public Status submitStatus(@RequestBody Status status) {
		return statusService.submitStatusData(status);
	}
	
	@GetMapping("/")
	public ArrayList<Status> getAllStatus(){
		return statusService.retrieveStatus();
	}
}
