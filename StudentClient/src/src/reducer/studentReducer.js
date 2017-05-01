export default function reducer(state={
    studentData:[],
    fetching:false,
    fetched:false

},action)
{
        switch(action.type)
        {
             case "FETCH_student_DATA" :
            {
                return{...state,fetching:action.payload}

                breaks;
            }
            case "fetch_Student_Details" :
            {
                return{...state,studentData:action.payload,fetched:true}

                breaks;
            }

           
        }
    return state;
}