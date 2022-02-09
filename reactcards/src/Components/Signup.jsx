import { Form,FormGroup,Label,Col,Input,Button } from "reactstrap";

const Signup =() =>{
    return(  <Form
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
            //  onChange={(e) =>
            //    setEmail(e.target.value)}
             id="exampleEmail"
             name="email"
             placeholder="xyz@gmail.com"
             type="email"
             //value= {state.email} 
             
       />
 {/* yaha par is button se apan password aur email field clear kar rahe he    */}
        {/* <button type ="button" onClick={() => setEmail("")}>&times;</button> */}
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
       <Input 
       //value= {state.password}
         
        //  onChange={(e) => 
        //    setPassword(e.target.value)}
       
         id="examplePassword"
         name="password"
         placeholder="Hello@123"
         type="password"
       />
       {/* <button type ="button " onClick={() => setPassword("")}>&times;</button> */}
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

export default Signup;