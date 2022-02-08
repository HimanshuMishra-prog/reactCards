import React from 'react';

import { Container } from 'reactstrap';
import Forms from './Components/form';
const LoginForm = (props) => {
    const LoginSuccess = () =>{
        props.onLoginSuccess();
    }
    return(
<Container>
<h1>Please Login</h1> 
<Forms onLoginSuccess = {LoginSuccess}
/>
</Container>
    );
}

export default LoginForm