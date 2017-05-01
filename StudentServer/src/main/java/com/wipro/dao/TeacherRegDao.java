package com.wipro.dao;

import java.io.IOException;
import java.util.ArrayList;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.dto.Address;
import com.wipro.dto.Course;
import com.wipro.dto.Login;
import com.wipro.dto.Student;
import com.wipro.dto.Teacher;

@Transactional
@Repository("tchrDao")
public class TeacherRegDao implements ITeacherRegDao{
	
	@Autowired
	private SessionFactory sessionFactory;
			
	public String insertRegData(JSONObject reqJson){
		
  		JSONObject course = null;
		
		JSONObject teacher=null;
		
		JSONObject address=null;
		
		JSONObject login=null;
		
		
		Session session = sessionFactory.openSession();
		
      
	
       teacher = reqJson.getJSONObject("teacher");
	
	   address = reqJson.getJSONObject("address");
	
	   course = reqJson.getJSONObject("course");
	
	   login  = reqJson.getJSONObject("login");
	  
	    ObjectMapper mapper = new ObjectMapper();
		mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		boolean success = false; 
		
		try {
			Teacher tchrObj=mapper.readValue(teacher.toString(), Teacher.class);
			
			
			Course crsObj=mapper.readValue(course.toString(), Course.class);
		
		
		    Address tchrAdd=mapper.readValue(address.toString(), Address.class);
			    
		    
		    Login loginData=mapper.readValue(login.toString(), Login.class);
		    
		    
		     
		     tchrObj.setLogin(new ArrayList<Login>(0));
		     tchrObj.getLogin().add(loginData);
			  
		     tchrObj.setAddress(new ArrayList<Address>(0));
		     tchrObj.getAddress().add(tchrAdd);
			    
			 tchrObj.setTcourse(new ArrayList<Course>(0));
		     tchrObj.getTcourse().add(crsObj);
		     Transaction tx = session.beginTransaction();
			    
			    
			    Integer Id=(Integer) session.save(tchrObj);
			    
			   
			    tx.commit();
			    session.flush();
				session.close();
			  
			 				return getTeacher(Id);
		
		} catch (IOException e) {
			
			e.printStackTrace();
			return null;
		}
		
		
	}

	@Override
	public String getTeacher(int Id) {
		  try {
		    Session session = sessionFactory.openSession();
		    Transaction tx = session.beginTransaction();
		    
		    ObjectMapper mapper = new ObjectMapper();
			mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		    Teacher teacherObj = session.get(Teacher.class,Id);
		    
		    tx.commit();
		    session.flush();
			session.close();
			
		  
				String response=mapper.writeValueAsString(teacherObj);
			} catch (JsonProcessingException e) {
				
				e.printStackTrace();
			}
		    
		return null;
	}
}
