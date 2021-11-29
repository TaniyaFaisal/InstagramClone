package com.instagram.instagrambackend.entities;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Status")
public class Status {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	
	private String statusID;
	private String userId;
	private String path;
	private String username;
	private Timestamp timestamp;
	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Status(Integer id, String statusID, String userId, String path, Timestamp timestamp) {
		super();
		this.id = id;
		this.statusID = statusID;
		this.userId = userId;
		this.path = path;
		this.timestamp = timestamp;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getStatusID() {
		return statusID;
	}
	public void setStatusID(String statusID) {
		this.statusID = statusID;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	public Timestamp getTimestamp() {
		return timestamp;
	}
	public void setTimestamp(Timestamp timestamp) {
		this.timestamp = timestamp;
	}
	
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "Status [id=" + id + ", statusID=" + statusID + ", userId=" + userId + ", path=" + path + ", username="
				+ username + ", timestamp=" + timestamp + "]";
	}
}
