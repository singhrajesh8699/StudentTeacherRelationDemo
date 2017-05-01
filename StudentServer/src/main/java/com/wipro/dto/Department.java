package com.wipro.dto;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="Department")
public class Department implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="departId",unique=true,nullable=false)
	private int departId;
	
	
	@Column(name="departName",unique=true,nullable=false)
	private String departName;
	
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="departId",nullable=false)
	@Column(nullable=false)
	private List<Teacher> teacherDpt;
	
	
	public int getDepartId() {
		return departId;
	}
	public void setDepartId(int departId) {
		this.departId = departId;
	}
	public String getDepartName() {
		return departName;
	}
	public void setDepartName(String departName) {
		this.departName = departName;
	}
	public List<Teacher> getTeacher() {
		return teacherDpt;
	}
	public void setTeacher(List<Teacher> teacherDpt) {
		this.teacherDpt = teacherDpt;
	}
	
	

}
