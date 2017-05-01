import axios from "axios";
export function loginData(email)
{

    return function(dispatch)
    {
       var promise= new Promise(function(resolve,reject)
       {
         axios.get("http://localhost:8080/login/"+email).then((result)=>
            {
            
              if(result.data.login[0].type=="student")
              {
                   dispatch({type: "fetch_Student_Details", payload:result.data });
                    resolve('success');
              }else{
                   dispatch({type: "fetch_Teacher_Details", payload:result.data });
              }
             
            }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })

      
           })
           return promise;
    }
}