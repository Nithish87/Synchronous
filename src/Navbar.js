import { Link } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { signOut } from "firebase/auth";
const Navbar = () => {
  //Nav => navigation bar
  return (
    <nav className='navbar'>
      <h1>Godsend</h1>
      <div className='links'>
        <Link to='/'>Home </Link>
        <Link to='/'>About Us</Link>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    </nav>
  );
};

export default Navbar;
