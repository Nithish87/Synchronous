import { Link } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff,faSignOut, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const NavbarSL = () => {
  //Nav => navigation bar

  return (
    <nav className='navbar'>
      <h1>Godsend</h1>
      
    </nav>
  );
};

export default NavbarSL;
