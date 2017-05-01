import axios from "axios";
export function fetchStudentDetails()
{

      return function(dispatch) {
            
            dispatch({type: "FETCH_student_DATA", payload:false});
      /*
             axios.post("http://localhost:8080/registration",details,
            {
              headers:{"Content-Type":"application/json"}
            }

            ).then((result)=>
            {
              dispatch({type: "fetch_Student_Details", payload:result });
            }).catch((error)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            }) */

         
      }

};