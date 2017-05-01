package com.wipro.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.wipro.service.ILoginSearch;
import com.wipro.service.IStudentReg;
import com.wipro.service.IStudentService;
import com.wipro.service.ITeacherReg;

@RestController
public class TeacherSTd {

	@Autowired
	private IStudentService stdService;
	
	@Autowired
	private IStudentReg stdReg;
	
	@Autowired
	private ITeacherReg tchrReg;
	
	@Autowired
	private ILoginSearch loginSearch;
	
	@RequestMapping(value="/insertData",method=RequestMethod.POST)
	public void requestprocessor(@RequestBody String request)
	{
		stdService.insertData(request);
	}
	
	@RequestMapping(value="/registration",method=RequestMethod.POST)
	public String registration(@RequestBody String request)
	{
		JSONObject reqJson=new JSONObject(request);
		
		if(reqJson.getString("type").equals("teacher"))
		{
			return tchrReg.insertRegData(reqJson);
		}
		
		if(reqJson.getString("type").equals("student"))
		{
			return stdReg.insertRegData(reqJson);
		}
		return null;
	}
	
	
	   @RequestMapping(value = "/login/{emailId}", method=RequestMethod.GET)
	   public String SearchResult(@PathVariable String emailId)
	   {
		 return loginSearch.searchLogin(emailId);
		
	   }
	
}
