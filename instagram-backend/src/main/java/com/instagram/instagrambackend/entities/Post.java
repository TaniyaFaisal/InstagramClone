package com.instagram.instagrambackend.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Post")
public class Post {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String postID;
	private String userId;
	private String postPath;
	private String username;
	private Timestamp timestamp;
	private Integer likeCount;
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(Integer id, String postID, String userId, String postPath, Timestamp timestamp, Integer likeCount) {
		super();
		this.id = id;
		this.postID = postID;
		this.userId = userId;
		this.postPath = postPath;
		this.timestamp = timestamp;
		this.likeCount = likeCount;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getPostID() {
		return postID;
	}
	public void setPostID(String postID) {
		this.postID = postID;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPostPath() {
		return postPath;
	}
	public void setPostPath(String postPath) {
		this.postPath = postPath;
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
	public Integer getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(Integer likeCount) {
		this.likeCount = likeCount;
	}
	@Override
	public String toString() {
		return "Post [id=" + id + ", postID=" + postID + ", userId=" + userId + ", postPath=" + postPath + ", username="
				+ username + ", timestamp=" + timestamp + ", likeCount=" + likeCount + "]";
	}
	
	
}
