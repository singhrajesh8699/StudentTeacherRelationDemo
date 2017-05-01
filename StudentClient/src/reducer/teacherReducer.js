export default function reducer(state = {
  teacherData:[],
  fetching: false,
  fetched: false,
},action){

    switch(action.type){
       case "FETCH_teacher_DATA" :
            {
                return{...state,fetching:action.payload}
                breaks;
            }

       case "fetch_Teacher_Details":
       {
            return {...state,teacherData: action.payload,fetched:true};
            break;
        }

 }

  return state;
}
