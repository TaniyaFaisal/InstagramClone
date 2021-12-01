package com.instagram.instagrambackend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.instagrambackend.entities.Post;
import com.instagram.instagrambackend.services.PostService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/post")
public class PostController {
	
	@Autowired
	PostService postService;
	
	@PostMapping("/")
	public Post submitPost(@RequestBody Post post) {
		return postService.submitPostData(post);
	}
	
	@GetMapping("/")
	public ArrayList<Post> getAllPost(){
		return postService.retrieveAllPost();
	}
	
}
