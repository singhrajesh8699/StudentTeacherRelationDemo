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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author RA336530
 *
 */
@Entity
@Table(name="Course")
public class Course implements Serializable {
   
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="courseId",unique=true,nullable=false)
	private int courseId;
	
	@Column(name="courseName",unique=false,nullable=false)
	private String course;
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="teacherId",nullable=true,insertable = false, updatable = false)
	private Teacher teacherCrs;
	
	@JsonIgnore
	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinTable(name = "Student_Course", joinColumns = {
			@JoinColumn(name = "StudentId", nullable = true,updatable = false,insertable = false) },
			inverseJoinColumns = { @JoinColumn(name = "courseId",
			nullable = false) })
	private Set<Student> stdCrs;



	public int getCourseId() {
		return courseId;
	}


	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}


	public String getCourse() {
		return course;
	}


	public void setCourse(String course) {
		this.course = course;
	}


	public Teacher getTeacherCrs() {
		return teacherCrs;
	}


	public void setTeacherCrs(Teacher teacherCrs) {
		this.teacherCrs = teacherCrs;
	}


	public Set<Student> getStdCrs() {
		return stdCrs;
	}


	public void setStdCrs(Set<Student> stdCrs) {
		this.stdCrs = stdCrs;
	}
	
	
	
	
	
}
