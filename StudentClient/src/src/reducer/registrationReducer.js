export default function reducer(state = {
  registrationData:'',
  fetching: false,
  fetched: false,
},action){

    switch(action.type){

        
         case "FETCH_registration_DATA":
      {
       return {...state,fetching:action.payload};
       break;
      }

   case "registration":
   {
        return {...state,registrationData: action.payload,fetched:true};
        break;
    }

    case "Registration_USERDATA_REJECTED" :
    {
      return {...state, fetching: false, error: action.payload}
        break;
    }

 }

  return state;
}
