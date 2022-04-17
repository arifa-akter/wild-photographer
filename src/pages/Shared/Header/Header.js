import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../../images/logo.jpg'

const Header = () => {
    return (
        <section className='nav-style'>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="">
              <img style={{width:'50px', height:'50px'}} src={logo} alt="" />
              <span className="menu-title">TEN STAR HOTEL </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to=""><span className="menu">Home</span></Nav.Link>
              <Nav.Link as={Link} to=""><span className="menu">About</span></Nav.Link>
        
              <Nav.Link href="#deets"><span className="menu">Service</span></Nav.Link>
              <Nav.Link href="#deets"><span className="menu">Gallery</span></Nav.Link>
              <Nav.Link as={Link} to="" href="home#rooms" >
              <span className="menu">Blogs</span>
              </Nav.Link>
              <Nav.Link as={Link} to="">
              <span className="menu">Login</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        </section>
    );
};

export default Header;