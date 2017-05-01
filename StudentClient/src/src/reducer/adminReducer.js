export default function reducer(state = {
  teacherList:[],
  studentList:[],
  fetching: false,
  fetched: false,
},action){

    switch(action.type){

         case "FETCH_student_teacher_DATA":
      {
       return {...state,teacherList:action.payload,studentList:action.student};
       break;
      }

 

 }

  return state;
}
