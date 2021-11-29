package com.instagram.instagrambackend.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.instagram.instagrambackend.entities.Comment;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Integer>{
	
	Comment save(Comment comment);
	ArrayList<Comment> findAllByPostId(String postId);
}
