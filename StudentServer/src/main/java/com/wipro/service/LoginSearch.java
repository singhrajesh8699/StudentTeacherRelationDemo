package com.wipro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wipro.dao.ILoginSearchDao;

@Service
public class LoginSearch implements ILoginSearch{

	@Autowired ILoginSearchDao loginDao;
	
	@Override
	public String searchLogin(String emailID) {
		
		return loginDao.searchLogin(emailID);
		
	}

}
