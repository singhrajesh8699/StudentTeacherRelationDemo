import axios from "axios";

export function fetchAllData()
{

     return function(dispatch)
    {
     var promise= new Promise(function(resolve,reject)
       {
        axios.get("http://localhost:8080/requestAllData").then((result)=>
            {
            
            console.log(result.data)
            dispatch({type: "FETCH_student_teacher_DATA", payload:result.data[0].teacher,student:result.data[1].student });
            resolve('success');
         }).catch((err)=>
            {
                dispatch({type: "Registration_USERDATA_REJECTED", payload: err})
            })

           
             })
           return promise;
    }
}


export function updateStudent(stdData)
{

     return function(dispatch)
    {
    

        var details=JSON.stringify(stdData);
          
            axios.post("http://localhost:8080/update",details,
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


export function updateTeacher(tchData)
{

     return function(dispatch)
    {
    

        var details=JSON.stringify(tchData);
          
            axios.post("http://localhost:8080/update",details,
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