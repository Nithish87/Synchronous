import { Link } from "react-router-dom";

const Navbar = () => {
    //Nav => navigation bar
    return (  
       <nav className="navbar">
           <h1>Godsend</h1>
           <div className="links">
               <Link to="/">Home </Link>
               <Link to="/">About Us</Link>
           </div>
       </nav>
    );
}
 
export default Navbar;