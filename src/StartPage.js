import { Link } from "react-router-dom";

const StartPage = () => {
    return ( 
        <div className="start">
            <h2>Login As:</h2>
            <br></br>
            <div className="choices">
                <Link to="/"><button id="police"><h4>POLICE</h4></button></Link>
                <br></br>
                <Link to="/"><button id="medic"><h4>MEDIC</h4></button></Link>
            </div>
        </div>
     );
}
 
export default StartPage;