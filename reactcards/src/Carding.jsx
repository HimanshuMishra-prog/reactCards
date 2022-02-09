import React from "react";
import Card from "./Components/Cards";
import axios from "axios";
import { useState,useEffect } from "react";
import { Container } from "reactstrap";
import {useSelector ,useDispatch} from 'react-redux';
import { userDataInitialize, userDataSuccess } from "./users/action";
const Cards = () =>{
    const [response,setResponse] = useState([]);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() =>{
      dispatch(userDataInitialize())
      async function getData(){
        const res = await axios(`https://reqres.in/api/users`);
        setResponse(res.data.data)
        dispatch(userDataSuccess(res.data))
      };
      getData()
     
    },  []);
    return(
      <Container>
    <h1>Welcome to the list of users</h1> 
   <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
    {response.map((value)=>{
      return(
        <Card imgsrc = {value.avatar}
              title = {value.first_name}
              text = {value.email}
        />
          );
       }
   
       )
    }
     </div>
     </Container>
    );
  }
  export default Cards;