package com.wipro.dao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashSet;

import javax.transaction.Transactional;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.wipro.dto.ClassRoom;
import com.wipro.dto.Course;
import com.wipro.dto.Department;
import com.wipro.dto.Student;
import com.wipro.dto.Address;
import com.wipro.dto.Teacher;

@Transactional
@Repository("stdDao")
public class StudentDao implements IStudentDao{

   
	@Autowired
	private SessionFactory sessionFactory;
	
	
	@Override
	public void insertData(String request) {
		
		
		JSONObject reqJson = null;
		JSONObject teacher = null;
		JSONObject course = null;
		JSONObject departmet = null;
		JSONObject student=null;
		JSONObject address=null;
		JSONObject classroom=null;
		
		
		Session session = sessionFactory.openSession();
		
		
		try {
			
			reqJson = new JSONObject(request);
			
			course = reqJson.getJSONObject("course");
			
			student = reqJson.getJSONObject("student");
			
			address = reqJson.getJSONObject("address");
			
			classroom = reqJson.getJSONObject("classroom");
		    
						
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(MapperFeature.ACCEPT_CASE_INSENSITIVE_PROPERTIES, true);
			
				Department dept=mapper.readValue(departmet.toString(),Department.class);
				
				Teacher tchrObj=mapper.readValue(teacher.toString(), Teacher.class);
				
				Course crsObj=mapper.readValue(course.toString(), Course.class); 
				
				Student stdObj=mapper.readValue(student.toString(), Student.class);
				
				Address addStd=mapper.readValue(address.toString(), Address.class);
				
				ClassRoom clsObj=mapper.readValue(classroom.toString(), ClassRoom.class);
				
				
				
				addStd.setStdAdd(stdObj);
				//stdObj.setAddress(addStd);
				
				
				
				
				crsObj.setTeacherCrs(tchrObj);
				
				crsObj.setStdCrs(new HashSet<Student>(0));
				crsObj.getStdCrs().add(stdObj);
				

				
              //  stdObj.setClassRoom(clsObj);
				
				clsObj.setStdCls(new ArrayList<Student>(0));
				clsObj.getStdCls().add(stdObj);
				
				clsObj.setTcrCls(new HashSet<Teacher>(0));
				clsObj.getTcrCls().add(tchrObj);
				
				tchrObj.setTcourse(new ArrayList<Course>(0));
				tchrObj.getTcourse().add(crsObj);
			

				
				tchrObj.setDepartment(dept);
				
				dept.setTeacher(new ArrayList<Teacher>());
				dept.getTeacher().add(tchrObj);  
				
			
					
				
				session.save(dept);
				session.flush();
				session.close();
				  
				
				
		
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
}
