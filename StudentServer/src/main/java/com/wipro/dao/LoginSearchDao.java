package com.wipro.dao;

import java.util.Iterator;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.dto.Login;
import com.wipro.dto.Student;
import com.wipro.dto.Teacher;

@Repository
@Transactional
public class LoginSearchDao implements ILoginSearchDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public String searchLogin(String emailID) {
	
		
		Session session = sessionFactory.openSession();
		
		 ObjectMapper mapper = new ObjectMapper();
		 mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
		
		String sql="FROM Login l WHERE l.email=:emailId";
		Query qry=session.createQuery(sql);
		qry.setParameter("emailId", emailID);
		List result=qry.list();
		
		Iterator itr=result.iterator();
		
		JSONObject jobj=new JSONObject();
		
		if(itr.hasNext())
		{
			Login login=(Login)itr.next();
			if(login.getType().equals("student"))
			{
				String sql1="FROM Student s WHERE s.StudentId=:StudentId";
				Query qry1=session.createQuery(sql1);
				qry1.setParameter("StudentId", login.getStudent().getStudentId());
				List result1=qry1.list();
				Iterator itr1=result1.iterator();
				if(itr1.hasNext())
				{
					Student std=(Student)itr1.next();
					try {
						
						String stdData=mapper.writeValueAsString(std);
						System.out.println(stdData);
						return stdData;
						
					} catch (JsonProcessingException e) {
						
						e.printStackTrace();
					}
				}
				
			}
			if(login.getType().equals("teacher"))
			{
				String sql2="FROM Teacher t WHERE t.tracherId=:tracherId";
				Query qry2=session.createQuery(sql2);
				qry2.setParameter("tracherId", login.getTeacher().getTeacherId());
				List result2=qry2.list();
				Iterator itr2=result2.iterator();
				if(itr2.hasNext())
				{
					Teacher tch=(Teacher)itr2.next();
					try {
						
						String tchData=mapper.writeValueAsString(tch);
						System.out.println(tchData);
						return tchData;
						
					} catch (JsonProcessingException e) {
						
						e.printStackTrace();
					}
				}
			}
		}
		
		return null;
	}

	
}
