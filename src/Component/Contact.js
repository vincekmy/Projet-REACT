import React from 'react';
import MyCarousel2 from './Carousel2';
import Container from 'react-bootstrap/Container';
import MyContactForm from './ContactForm';

import '../index.css';



class MyContact extends React.Component{
    
    
    render(){
        return <>
            <MyCarousel2/>
            <Container className="themed-container jumbotron m-5 p-5 rounded">
                <MyContactForm/>
            </Container>
        </>
        
    }
    
}


export default MyContact;