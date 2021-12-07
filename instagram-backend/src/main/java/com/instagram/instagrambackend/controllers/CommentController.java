package com.instagram.instagrambackend.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.instagram.instagrambackend.entities.Comment;
import com.instagram.instagrambackend.services.CommentService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {
	
	@Autowired
	CommentService commentService;
	
	@PostMapping("/")
	public Comment submitComment(@RequestBody Comment comment) {
		return commentService.submitCommentData(comment);
	}
	
	@GetMapping("/{userId}")
	public ArrayList<Comment> getAllComments(@PathVariable("userId") String userId){
		return commentService.retrieveAllComment(userId);
	}
	
	

}
