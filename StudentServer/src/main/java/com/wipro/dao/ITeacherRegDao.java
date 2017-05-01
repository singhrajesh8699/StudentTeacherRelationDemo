package com.wipro.dao;

import org.json.JSONObject;

public interface ITeacherRegDao {

	String insertRegData(JSONObject reqJson);
	
	String getTeacher(int id);

}
