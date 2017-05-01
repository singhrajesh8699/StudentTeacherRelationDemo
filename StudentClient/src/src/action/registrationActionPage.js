import axios from "axios";

export function registrationData(registrationData)
{

      return function(dispatch) {

        var details=JSON.stringify(registrationData);
          
          dispatch({type: "FETCH_registration_DATA", payload:false});

            axios.post("http://localhost:8080/registration",details,
            {
              headers:{"Content-Type":"application/json"}
            }

            ).then((result)=>
            {
            
              if(result.data.login[0].type=="student")
              {
                   dispatch({type: "fetch_Student_Details", payload:result.data });
              }else{
                   dispatch({type: "fetch_Teacher_Details", payload:result.data });
              }
             
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })
        
      }

};

export function existingTableData(existingTableData)
{
      return function(dispatch)
      {
        var details=JSON.stringify(existingTableData);

        axios.post("http://localhost:8080/insertTableRecord",details,
            {
              headers:{"Content-Type":"application/json"}
            }

            ).then((result)=>
            {
            
              console.log(result);
             
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })
      }
}