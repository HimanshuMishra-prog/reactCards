import React from "react";
import Card from "./Components/Cards";
import axios from "axios";
import { useState,useEffect } from "react";
import { Container } from "reactstrap";

const Cards = () =>{
    const [response,setResponse] = useState([]);
    useEffect(() =>{
      async function getData(){
        const res = await axios(`https://reqres.in/api/users`);
        setResponse(res.data.data)
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