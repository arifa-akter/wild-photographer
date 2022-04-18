import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo2 from '../../../images/logo2.png'
import profile from '../../../images/profile.png'
import './Header.css'


const Header = () => {
  const[user] = useAuthState(auth)
  console.log(user)
  const photo = user?.photoURL
  console.log(photo)
  const handleSingOut =()=>{
    signOut(auth)
  }
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
                  {
                    user?  <img className='link-image' src={photo} alt="" />
                    :
                    <img className='link-image' src={profile} alt="" />
                  }
                    
                     {
                       user?<span onClick={handleSingOut} className='link-login'>sing out</span> 
                       :
                       <Link className='link-login' to ="/login">Login</Link>
                     }
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
              <Nav.Link as={Link} to="/about"><span className="menu">About</span></Nav.Link>
        
              <Nav.Link href="#deets"><span className="menu">Service</span></Nav.Link>
              <Nav.Link href="#deets"><span className="menu">Gallery</span></Nav.Link>
              <Nav.Link as={Link} to="/blogs" >
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