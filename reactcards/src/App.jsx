import Cards from './Carding';
import LoginForm from './LoginForm';

import { useState,useEffect } from 'react';





function App() {
 
  let [showLoginPage,setShowLoginPage] = useState(true)
  let [runEffect,setRunEffect] = useState(1);
  // let showLoginPage = true
  useEffect(() => {
    console.log("Inside USE effect",runEffect)
    setTimeout(()=>{
      const isLoggedIn = localStorage.getItem("isLoggedIn")
      if(isLoggedIn)setShowLoginPage(false)
    },1000)
  },[runEffect]);
  
  
  const onLoginSuccess = () => {
    setShowLoginPage(false)
    localStorage.setItem("isLoggedIn",true)
  }
  const Logout =() =>{
    setShowLoginPage(true);
    localStorage.removeItem("isLoggedIn")
  }

  return (
   <>
 
   {showLoginPage === true ? 
  <LoginForm onLoginSuccess= {onLoginSuccess}/>
  :
  <div><button onClick={Logout}>Logout</button> <Cards /> </div>
  } 
   </>
 );
}

export default App;
