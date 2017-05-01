package com.wipro.service;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.dao.ITeacherRegDao;

@Service("tchrReg")
public class TeacherReg implements ITeacherReg{
	
	@Autowired
	private ITeacherRegDao tchrDao;
	
	@Override
	public String insertRegData(JSONObject reqJson) {
		
	return	tchrDao.insertRegData(reqJson);
	}

}
