package com.wipro.dto;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Address")
public class Address implements Serializable{
	

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "AddressId", unique = true, nullable = false)
	private int AddressId;
	
	
	@Column(name = "address", nullable = false,length=100)
	private String address;
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="StudentId",nullable=true,unique=true,updatable = false,insertable = false)
	private Student stdAdd;
	
	
	@JsonIgnore
	@ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name="teacherId",nullable=true,unique=true,updatable = false,insertable = false)
	private Teacher tchrAdd;



	public int getAddressId() {
		return AddressId;
	}



	public void setAddressId(int addressId) {
		AddressId = addressId;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public Student getStdAdd() {
		return stdAdd;
	}



	public void setStdAdd(Student stdAdd) {
		this.stdAdd = stdAdd;
	}



	public Teacher getTchrAdd() {
		return tchrAdd;
	}



	public void setTchrAdd(Teacher tchrAdd) {
		this.tchrAdd = tchrAdd;
	}

	

	
}
