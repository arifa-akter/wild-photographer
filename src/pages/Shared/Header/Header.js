import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../../images/logo2.png'
import profile from '../../../images/profile.png'
import './Header.css'


const Header = () => {
    return (
        <section className='nav-style'>
          <section className='login-signUp'>
            <div className="container">
               <div className="row">
                 <div className="col-4 col-lg-4">
                   <div className="logo-image">
                   <img src={logo2} alt="" />
                   </div>
                 </div>
                  <div className="col-8 col-lg-8 d-flex justify-content-end align-items-center "> 
                     <img className='link-image' src={profile} alt="" />
                     <Link className='link-login' to ="/login">Login</Link>
                      <Link  className='link-login' to ="/signup">sign up</Link>
                  </div>
               </div>
            </div>
          </section>
        <Navbar collapseOnSelect expand="lg"  variant="dark">
          <Container>
          <Navbar.Brand as={Link} to="">
              <span className="menu-title">WILD PHOTOGRAPHER </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/"><span className="menu">Home</span></Nav.Link>
              <Nav.Link as={Link} to=""><span className="menu">About</span></Nav.Link>
        
              <Nav.Link href="#deets"><span className="menu">Service</span></Nav.Link>
              <Nav.Link href="#deets"><span className="menu">Gallery</span></Nav.Link>
              <Nav.Link as={Link} to="" href="home#rooms" >
              <span className="menu">Blogs</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
        </section>
    );
};

export default Header;