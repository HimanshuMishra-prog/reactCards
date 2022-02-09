import React from 'react';

import { Container } from 'reactstrap';
import Forms from './Components/form';
import Navigation from './Components/navbar';
const LoginForm = (props) => {
    const LoginSuccess = () =>{
        props.onLoginSuccess();
    }
   
    return(
<>
<Navigation />
<Container>


<Forms onLoginSuccess = {LoginSuccess}
/>
</Container>
</>
    );
}

export default LoginForm