import React, { useReducer } from "react";
import { Form,FormGroup,Label,Col,Input,Button } from "reactstrap";

import axios from "axios";



const Forms = (props) =>{
//  const [email,setEmail] = useState("");
// const [password,setPassword] = useState("");
 //const [emailError,setEmailError] = useState("");
// const[passwordError,setPasswordError] = useState("");
//2. initial states jo chachiye usko define kara
const initialState = {
  email : "",
  password :"",
  emailError :"",
  passwordError : "",
}

//1. pehle useReducer banaye jo reducer function or initialState leta he
//useReducer 2 chiz deta he state jo ki sari use states he or dispatch function
const [state, dispatch] = useReducer(reducer, initialState);

//3. sari initial state variables ke action define kara
function reducer(state, action) {
   const {type ,payload } = action;

  switch (type) {
    case 'setEmail':
      return {...state , email:payload};
    case 'setPassword':
      return {...state , password:payload};
    case 'setEmailError':
      return {...state , emailError:payload};
    case 'setPasswordError':
      return {...state , passwordError:payload};
    default:
      return {...state};
  }
}
//4. sare functions define kare jo reducer me use kar rahe he
const setEmail = (email) =>{
    dispatch({type : 'setEmail',payload : email})
}
const setPassword = (password) =>{
  dispatch({type : 'setPassword',payload : password})
}
const setEmailError = (emailError) =>{
  dispatch({type : 'setEmailError',payload : emailError})
}
const setPasswordError = (passwordError) =>{
  dispatch({type : 'setPasswordError',payload : passwordError})
}
//const [state,dispatch] = useReducer(reducer,initialState);
//const {email,password,emailError,passwordError} = state;
 


// const validateEmail = () =>{
//   if(validator.isEmail(email)){
//     //setEmailError("valid email")
//    dispatch(
//       {type:loginConstants.emailError,
//        payload:"valid Email"})
//     return true;
//   }
//   else{
//     console.log("Invalid email")
//     //setEmailError("invalid email")
//     dispatch(
//       {type:loginConstants.emailError,
//        payload:"invalid error"})
//     return false;
//   }
// }

// const validatePassword = () =>{
//   const isLongEnough = password.length >= 8
//   const hasSpace = password.indexOf(" ") === -1
//   const isValid = isLongEnough && hasSpace;
//   if(isValid){
//    // setPasswordError("valid password")
//    dispatch(
//      {type:loginConstants.passwordError,
//       payload:"valid Password"})
//     return true;
//   }
//   else{
//     console.log("invalid password");
//     //setPasswordError("invalid password")
//     dispatch(
//       {type:loginConstants.passwordError,
//        payload:"invalid password"})
//     return false;
//   }
// }
const onSubmit = (event) => {
  event.preventDefault()
  const isLongEnough = state.password.length >= 8
 const hasSpace = state.password.indexOf(" ") === -1
  const isValid = isLongEnough && hasSpace;
  if(isValid){
      axios.post(`https://reqres.in/api/login`,{
        email:state.email,
        password:state.password,
      })
      .then(
        (response)=>{
          props.onLoginSuccess();
        })
      .catch(
        (error)=>{
         console.log(error);
        }
      )
  }
  else{
      console.log(state.email,state.password)
      
  }
}

  return(  <Form onSubmit={onSubmit  }
       className="forms"         
  >
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input 
            onChange={(e) =>
              setEmail(e.target.value)}
            id="exampleEmail"
            name="email"
            placeholder="xyz@gmail.com"
            type="email"
            value= {state.email} 
            
      />
{/* yaha par is button se apan password aur email field clear kar rahe he    */}
       <button type ="button" onClick={() => setEmail("")}>&times;</button>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input value= {state.password}
        
        onChange={(e) => 
          setPassword(e.target.value)}
      
        id="examplePassword"
        name="password"
        placeholder="Hello@123"
        type="password"
      />
      <button type ="button " onClick={() => setPassword("")}>&times;</button>
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button >
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
  );
}

export default Forms;