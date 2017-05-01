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
@Table(name = "Teacher")
public class Teacher implements Serializable {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name = "teacherId", unique = true, nullable = false)
	private int teacherId;
	
	@Column(name = "name", unique = false, nullable = false,length=100)
	private String name;
	
	@Column(name = "ph_nos", unique = false, nullable = true,length=100)
	private long ph_nos;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="teacherId",nullable=false,unique=true)
	private  List<Login> login;
	
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="teacherId",nullable=false,insertable = true, updatable = true)
	@Column(nullable=false)
	private List<Course> Tcourse;
	

	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="teacherId",nullable=false,unique=true)
	private List<Address> address;
	
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="departId",nullable=true ,insertable = false, updatable = false)
	private Department  department;
	
	
	
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Teacher_ClassRoom", joinColumns = {
			@JoinColumn(name = "teacherId", nullable = false) },
			inverseJoinColumns = { @JoinColumn(name = "classId",
					nullable = false, insertable = false, updatable = false) })
	private Set<ClassRoom> clsTchr;


	public int getTeacherId() {
		return teacherId;
	}


	public void setTeacherId(int teacherId) {
		this.teacherId = teacherId;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}


	public List<Course> getTcourse() {
		return Tcourse;
	}


	public void setTcourse(List<Course> tcourse) {
		Tcourse = tcourse;
	}


	public Set<ClassRoom> getClsTchr() {
		return clsTchr;
	}


	public void setClsTchr(Set<ClassRoom> clsTchr) {
		this.clsTchr = clsTchr;
	}


	public long getPh_nos() {
		return ph_nos;
	}


	public void setPh_nos(long ph_nos) {
		this.ph_nos = ph_nos;
	}


	
	public List<Login> getLogin() {
		return login;
	}


	public void setLogin(List<Login> login) {
		this.login = login;
	}


	public List<Address> getAddress() {
		return address;
	}


	public void setAddress(List<Address> address) {
		this.address = address;
	}
	
	
	
}
