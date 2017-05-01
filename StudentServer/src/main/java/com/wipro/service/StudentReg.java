package com.wipro.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.dao.IStudentDao;
import com.wipro.dao.IStudentRegDao;

@Service("stdReg")
public class StudentReg implements IStudentReg {
	
	@Autowired 
	private IStudentRegDao stdRegDao; 
	
	@Override
	public String insertRegData(JSONObject request) {
	
		return stdRegDao.insertRegData(request);
	}
}
