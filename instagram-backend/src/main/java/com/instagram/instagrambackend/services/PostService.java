package com.instagram.instagrambackend.services;

import java.util.ArrayList;
import java.util.Collections;

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
		post.setUserImage(usersService.displayUsersMetadate(post.getUserId()).getProfileImage());
		return postRepository.save(post);
	}

	public ArrayList<Post> retrieveAllPost() {
		ArrayList<Post> postList = postRepository.findAll();
		Collections.reverse(postList);
		return postList;
	}
	
	public ArrayList<Post> retrieveAllPosts(String userId) {
		return postRepository.findAllByUserId(userId);
	}

}
