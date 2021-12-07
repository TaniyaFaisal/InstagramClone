package com.instagram.instagrambackend.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.instagram.instagrambackend.entities.Post;

@Repository
public interface PostRepository extends CrudRepository<Post, Integer>{

	Post save(Post post);
	ArrayList<Post> findAll();
	ArrayList<Post> findAllByUserId(String userId);
}
	