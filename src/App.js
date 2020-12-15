import React from 'react';
import MyHeader from './Component/Header';
import MyHome from './Component/Home';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import MyLogin from './Component/Login';
import MyContact from './Component/Contact';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './index.css';




class App extends React.Component{
    render(){
        return <>
        
        <Router>
        <MyHeader/>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/Home" className="nav-link">
            Home
          </Link>
          <Link to="/Login" className="nav-link">
            Login
          </Link>
          <Link to="/Contact" className="nav-link">
            Contact
          </Link>
        </Nav>
      </Navbar>

      <Switch>
          <Route path="/home">
                <MyHome/>      
          </Route>
         <Route path="/Login">
            <MyLogin/>
        </Route> 
        <Route path="/Contact">
            <MyContact/>
        </Route>           
        </Switch>
        </Router>
        </>
    }






}
export default App;