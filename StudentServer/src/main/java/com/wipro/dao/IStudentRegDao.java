package com.wipro.dao;

import org.json.JSONObject;


public interface IStudentRegDao {

	String insertRegData(JSONObject request);
	String getStudent(int id);

}
