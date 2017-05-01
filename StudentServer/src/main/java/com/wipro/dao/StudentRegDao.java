package com.wipro.dao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.dto.Address;
import com.wipro.dto.Course;
import com.wipro.dto.Login;
import com.wipro.dto.Student;


@Transactional
@Repository("stdRegDao")
public class StudentRegDao implements IStudentRegDao{
	
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public String insertRegData(JSONObject request) {
		
		
		JSONObject jsonResponse=null;
		
		JSONObject course = null;
		
		JSONObject student=null;
		
		JSONObject address=null;
		
		JSONObject login=null;
		
		
		//Session session = sessionFactory.openSession();
		
       
	
       student = request.getJSONObject("student");
	
	   address = request.getJSONObject("address");
	
	   course = request.getJSONObject("course");
	
	   login  = request.getJSONObject("login");
	  
	    ObjectMapper mapper = new ObjectMapper();
		mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		boolean success = false;   
		
		try {
			
			Student stdObj=mapper.readValue(student.toString(), Student.class);
			
		
			
			Course crsObj=mapper.readValue(course.toString(), Course.class);
		
		
		    Address addStd=mapper.readValue(address.toString(), Address.class);
			    
		    
		    Login loginData=mapper.readValue(login.toString(), Login.class);
		    
		    stdObj.setLogin(new ArrayList<Login>(0));
		    stdObj.getLogin().add(loginData);
		     
		    stdObj.setAddress(new ArrayList<Address>(0));
		    stdObj.getAddress().add(addStd);
		   
		    
		    stdObj.setScourse(new HashSet<Course>(0));
		    stdObj.getScourse().add(crsObj);
		    
		    Session session = sessionFactory.openSession();
		    Transaction tx = session.beginTransaction();
		    Integer Id=(Integer) session.save(stdObj);
		    
		    tx.commit();
		    session.flush();
			session.close();
		    
			
			String response = getStudent(Id);
			return response;
			  
		
	
	} catch (IOException e) {
		
		e.printStackTrace();
		return null;
	}
		
	}


	@Override
	public String getStudent(int id) {
		// TODO Auto-generated method stub
		String response=null;
		try
		{
		    ObjectMapper mapper = new ObjectMapper();
			mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		    Session session = sessionFactory.openSession();
		    Transaction tx = session.beginTransaction();
		    Student studentObj = session.get(Student.class,id);
		 //   Student student=new Student();
		 //   student.setStudentId(id);
		   // session.update(student);
		    
		    
		    response=mapper.writeValueAsString(studentObj);
		    
		    tx.commit();
		    session.flush();
			session.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return response;
	}

}
