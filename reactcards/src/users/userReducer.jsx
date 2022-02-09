const initialState = {
    loader : false,
    userData :[],
    err : ""
}
const userReducer = (state = initialState,action) => {
   const{type ,payload} = action
   switch(type) {
    case "USER_DATA_INITALIZE" : 
    return {
        ...state ,
        loader : true
    }

    case "USER_DATA_SUCCESS" : 
    return {
               ...state ,
               loader : false,
               userData :payload
    }
       
    case "USER_DATA_FAILURE" : 
    return {
               ...state ,
               loader : false,
                userData :payload
    }
    default :
           return state 
    }
}

export default userReducer;