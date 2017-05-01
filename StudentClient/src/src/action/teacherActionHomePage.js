import axios from "axios";
export function teacherData(studentData)
{

      return function(dispatch) {
          
          dispatch({type: "FETCH_teacher_DATA", payload:false});

          dispatch({type: "teacher", payload:[] });
      }

};