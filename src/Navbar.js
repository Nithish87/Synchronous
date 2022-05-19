import { Link } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { signOut } from "firebase/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeUser,faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Navbar = () => {
  //Nav => navigation bar

  const [state,setState]=useState(false);

  const profile = <FontAwesomeIcon icon={faHomeUser} />;
  const signout= <FontAwesomeIcon icon={faSignOut}/>
  return (
    <nav className='navbar'>
      <h1>Godsend</h1>
      <div className='links'>
        <Link to='/'>Home </Link>
        <Link to='/'>Notification</Link>
        <Link to='/' >About Us</Link>
        <Link to='/'
         onClick={()=>{
          if(state==true)
            setState(false);
          else
            setState(true);
         }}>{profile}</Link>
         <br></br>
        <div className="userProfile">
          {state && 
            <div>
              <br></br>
              <Link onClick={() => signOut(auth)}>Signout <span><FontAwesomeIcon icon={faSignOut}/></span></Link>
            </div>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
