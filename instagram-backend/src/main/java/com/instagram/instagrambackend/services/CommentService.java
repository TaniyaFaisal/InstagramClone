package com.instagram.instagrambackend.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instagram.instagrambackend.entities.Comment;
import com.instagram.instagrambackend.repositories.CommentRepository;

@Service
public class CommentService {

	@Autowired
	CommentRepository commentRepository;
	
	@Autowired
	UsersService usersService;

	public Comment submitCommentData(Comment comment) {
		comment.setUsername(usersService.displayUsersMetadate(comment.getUserId()).getUserName());
		return commentRepository.save(comment);
	}

	public ArrayList<Comment> retrieveAllComment(String userId) {
		return commentRepository.findAllByPostId(userId);
	}

}
