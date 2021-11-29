package com.instagram.instagrambackend.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Comment")
public class Comment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String commentID;
	private String userId;
	private String postId;
	private String username;
	private Timestamp timestamp;
	private String comment;
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comment(Integer id, String commentID, String userId, String postId, Timestamp timestamp, String comment) {
		super();
		this.id = id;
		this.commentID = commentID;
		this.userId = userId;
		this.postId = postId;
		this.timestamp = timestamp;
		this.comment = comment;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCommentID() {
		return commentID;
	}
	public void setCommentID(String commentID) {
		this.commentID = commentID;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	@Override
	public String toString() {
		return "Comment [id=" + id + ", commentID=" + commentID + ", userId=" + userId + ", postId=" + postId
				+ ", username=" + username + ", timestamp=" + timestamp + ", comment=" + comment + "]";
	}	
}
