package com.wipro.dto;

import java.io.Serializable;
import java.util.*;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Student")
public class Student implements Serializable{
		
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "StudentId", unique = true, nullable = false)
	private int StudentId;
	
	@Column(name = "name", unique = false, nullable = false,length=100)
	private String name;
	
	@Column(name = "ph_nos", unique = false, nullable = true,length=100)
	private long ph_nos;
	
	
 	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="StudentId",nullable=false,unique=true)
	private  List<Login> login;
	

	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
 	@JoinColumn(name="StudentId",nullable=false,unique=true)
	private List<Address> address;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Student_Course", joinColumns = {
			@JoinColumn(name = "StudentId", nullable = false) },
			inverseJoinColumns = { @JoinColumn(name = "courseId",
			nullable = false, updatable = false,insertable = false) })
	private Set<Course> Scourse;
	
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="classId",nullable=true,insertable = false, updatable = false)
	private ClassRoom classRoom;
	
 	public List<Login> getLogin() {
		return login;
	}


	public void setLogin(List<Login> login) {
		this.login = login;
	}


		
		
		public int getStudentId() {
			return StudentId;
		}


		public void setStudentId(int studentId) {
			StudentId = studentId;
		}


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public long getPh_nos() {
			return ph_nos;
		}


		public void setPh_nos(long ph_nos) {
			this.ph_nos = ph_nos;
		}


	public ClassRoom getClassRoom() {
			return classRoom;
		}


		public void setClassRoom(ClassRoom classRoom) {
			this.classRoom = classRoom;
		}


		
		public List<Address> getAddress() {
			return address;
		}


		public void setAddress(List<Address> address) {
			this.address = address;
		}


		public Set<Course> getScourse() {
			return Scourse;
		}


		public void setScourse(Set<Course> scourse) {
			Scourse = scourse;
		}




		
	
}
