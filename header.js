import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Button} from 'react-bootstrap';
import logo from '../kakalogo.jpeg';

class Header extends Component{
    render(){
        return(
    <div className="header">
        <Navbar bg="dark" sticky="top" variant="dark">
            <Navbar.Brand href="#home"><img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
      /></Navbar.Brand>
             <Nav className="mr-auto">
               <Nav.Link href="#home">Home</Nav.Link>
               <Nav.Link href="#features">About</Nav.Link>
              <Nav.Link href="#pricing">Log in</Nav.Link>
             </Nav>
       
          <Button variant="success">Sign Up</Button>
       
  </Navbar>
        </div>
            );
    }
        
    
}

export default Header