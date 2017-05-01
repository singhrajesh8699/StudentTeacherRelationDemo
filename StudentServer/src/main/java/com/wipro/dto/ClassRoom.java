package com.wipro.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

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
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;




@Entity
@Table(name = "ClassRoom")
public class ClassRoom implements Serializable{
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "teacherId", unique = true, nullable = false)
	private int classId;
	
	@Column(name = "CRName", unique = false, nullable = true,length=100)
	private String CrName;
	
	@Column(name = "day", unique = false, nullable = true,length=100)
	private String days;
	
	@Column(name = "timing", unique = false, nullable = true,length=100)
	private String timing;
	
	@JsonIgnore
	@OneToMany(cascade=CascadeType.ALL,fetch=FetchType.LAZY)
	@JoinColumn(name="classId",nullable=true)
	private List<Student> stdCls;
	
	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Teacher_ClassRoom", 
	joinColumns = {@JoinColumn(name = "teacherId", nullable = true,updatable = false) },
	inverseJoinColumns = { @JoinColumn(name = "classId",nullable = false) })
	    private Set<Teacher> tcrCls;
	
	
	public String getDay() {
		return days;
	}

	public void setDay(String days) {
		this.days = days;
	}

	public String getTiming() {
		return timing;
	}

	public void setTiming(String timing) {
		this.timing = timing;
	}

	public int getClassId() {
		return classId;
	}

	public void setClassId(int classId) {
		this.classId = classId;
	}

	public String getCrName() {
		return CrName;
	}

	public void setCrName(String crName) {
		CrName = crName;
	}

	public List<Student> getStdCls() {
		return stdCls;
	}

	public void setStdCls(List<Student> stdCls) {
		this.stdCls = stdCls;
	}

	public Set<Teacher> getTcrCls() {
		return tcrCls;
	}

	public void setTcrCls(Set<Teacher> tcrCls) {
		this.tcrCls = tcrCls;
	}
	
	
	
	
}
