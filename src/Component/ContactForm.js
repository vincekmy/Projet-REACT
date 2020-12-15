import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import MyModalButton from './MyModalButton';

import '../index.css';
import "bootstrap/dist/css/bootstrap.min.css";

class MyContactForm extends React.Component{
    render(){
        return <>
        <Container className="themed-container jumbotron m-5 p-5 rounded">
        <Form>
  <Form.Row>
    <Form.Group sm='2' controlId="formGridEmail">
      <Form.Label>@mail</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group sm='2' controlId="formGridPassword">
      <Form.Label>Mot de Passe </Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Addresse</Form.Label>
    <Form.Control placeholder="Adresse Principale..." />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Addresse 2</Form.Label>
    <Form.Control placeholder="Adresse Complémentaire..." />
  </Form.Group>

  <Form.Row>
    <Form.Group sm='4' controlId="formGridCity">
      <Form.Label>Ville</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
  <MyModalButton variant="primary" type="submit" value="Envoyé"/>
</Form>
 </Container>
        </>
        
    }

}

export default MyContactForm;