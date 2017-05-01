package com.wipro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.dao.IStudentDao;

@Service("stdService")
public class StudentService implements IStudentService{

	@Autowired 
	private IStudentDao stdDao; 
	
	@Override
	public void insertData(String requestJason) {
			
		 stdDao.insertData(requestJason);
	}

	
}
