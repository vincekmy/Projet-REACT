import React from 'react';
import  Form from 'react-bootstrap/form';
import MyModalButton from './MyModalButton';
import Container from 'react-bootstrap/Container';

import '../index.css';



class MyLogin extends React.Component{
    render(){
        return <>
        <Container className="themed-container jumbotron m-5 p-5 rounded">
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                  </Form.Text>
         </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <MyModalButton variant="primary" type="submit" value="Se Connecter"/>
                           
        </Form>
        </Container>
        </>
        
    }

}

export default MyLogin;