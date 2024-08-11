import { Link } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPowerOff,
  faSignOut,
  faUser,
  faHome,
  faBell,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './css/navbar.css'
const NavbarComponent = () => {
  //Nav => navigation bar

  const [state, setState] = useState(false);

  const profile = <FontAwesomeIcon icon={faUser} />;
  const signout = <FontAwesomeIcon icon={faSignOut} />;
  const power = <FontAwesomeIcon icon={faPowerOff} />;

  return (
    // <nav className='navbar'>
    //   <h1>Godsend</h1>
    //   <div className='links'>
    //     <Link to='/'>Home </Link>
    //     <Link to='/'>Notification</Link>
    //     <Link to='/' >About Us</Link>
    //     <Link to='/'
    //      onClick={()=>{
    //       if(state==true)
    //         setState(false);
    //       else
    //         setState(true);
    //      }}>{power}</Link>
    //      <br></br>

    //     <div className="userProfile">
    //       {state &&
    //         <div className="profile">
    //           <Link to='/'>Profile <span><FontAwesomeIcon icon={faUser}/></span></Link>
    //           <br></br>
    //           <Link onClick={() => signOut(auth)}>Signout <span><FontAwesomeIcon icon={faSignOut}/></span></Link>
    //         </div>
    //       }
    //     </div>
    //   </div>
    // </nav> 

    <Navbar variant="dark" bg="myColor" className="navbar" sticky="top" >
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={require('./Images/logo.jpg')}
              width="250"
              height="60"
              className="d-inline-block align-top"
              alt="Synchronous"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><FontAwesomeIcon icon={faHome}/>&nbsp;Home</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faBell}/>&nbsp;My Notifications</Nav.Link>
            <Nav.Link href="#link"><FontAwesomeIcon icon={faInfoCircle}/>&nbsp;Learn More</Nav.Link>
            <Nav.Link href="#link"><div className="profile"><FontAwesomeIcon icon={faUser}/>&nbsp;My Profile</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 
  );
};

export default NavbarComponent;
