import React from 'react';
import MyCarousel from './Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';





import '../index.css';



class MyHome extends React.Component{
    
    
    render(){
        return <>
            <MyCarousel/>
            <Container className="themed-container jumbotron m-5 p-5 rounded">
                <p class="Text1">Bienvenue sur cette presentation d'un site web réaliser avec REACT et Bootstrap</p>
                    <h3 class="react">REACT</h3>
                    <h3 class="bootstrap">Bootstrap</h3>
                <ProgressBar>
                    <ProgressBar variant="success" now={40} label={`${40}%`}/>
                    <ProgressBar variant="warning" now={60} key={2} label={`${60}%`}/>
                </ProgressBar>
                <p class="alert1">Cette barre de progression a été faite avec des mesures approximative !  
                <Badge variant="warning"> Attention</Badge>
                </p>
            </Container>
            
        </>
        
    }
    
}


export default MyHome;