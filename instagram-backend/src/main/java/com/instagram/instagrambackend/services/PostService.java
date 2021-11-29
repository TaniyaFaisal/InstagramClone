package com.instagram.instagrambackend.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.instagram.instagrambackend.entities.Post;
import com.instagram.instagrambackend.repositories.PostRepository;

@Service
public class PostService {
	
	@Autowired
	PostRepository postRepository;
	
	@Autowired
	UsersService usersService;

	public Post submitPostData(Post post) {
		post.setUsername(usersService.displayUsersMetadate(post.getUserId()).getUserName());
		return postRepository.save(post);
	}

	public ArrayList<Post> retrieveAllPost() {
		return postRepository.findAll();
	}

}
