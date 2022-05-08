import { useState } from "react";
import { Link } from "react-router-dom";
import LeafletMap from "./LeafletMap";
import Search from "./Search";


const SignupPage = () => {

    //Stores the name
    const [name, setName] = useState('');
    //Stores password
    const [password, setPassword] = useState('');
    //Stores confirm password
    const [cPassword, setCPassword] = useState('');
    //Organisation dropdown selection
    const [type, setType] = useState('Select Emergency Organisation');
    //Stores email
    const [email, setEmail] = useState('');
    //Stores phone number
    const [phone, setPhone] = useState('');
    //Stores the state of dropdown button
    const [state,setState]=useState(false);

    //const [add,setAdd]=useState('');

    const [selectPosition, setSelectPosition] = useState(null);

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const handleChange = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
        // console.log(latitude);
    }

    const handleClick=()=>{
        if(state==false)
            setState(true);
        else if(state==true)
            setState(false);
    }


    return (
        <div className="signup">

            <h2>Signup:</h2>
            <form>

                <div class="organisationType">
                    <button class="dropDownButton" type="button" id="dropdownMenuButton1"
                     data-bs-toggle="dropdown" aria-expanded="false" onClick={handleClick}>
                        {type}
                    </button>
                    {state && <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li onClick={()=>{
                            {/*Sets the type to police*/}
                            setType("Police Station");
                            setState(false);
                        }}>Police Station</li>
                        <hr></hr>
                        <li onClick={()=>{
                            {/*Sets the type to hospital*/}
                            setType("Hospital");
                            setState(false);
                        }}>Hospital</li>
                    </ul>}
                </div>

                <div className="txt">
                    <label><b>Organisation Name:</b></label>
                    <input
                        type="text" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="txt_field">
                    <label><b>Location:</b></label>
                    <Search handleChange={handleChange} />
                    <LeafletMap latitude={latitude} longitude={longitude} />
                    {/* <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100vw",
                            height: "100vh",
                        }}
                    >
                        <div 
                        style={{ width: "50vw", height: "100%" }}
                        >
                            <LeafletMap selectPosition={selectPosition} />
                        </div>
                        <div 
                        style={{ width: "50vw" }}
                        >
                            <Search selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
                        </div>
                    </div> */}


                </div>

                <div className="txt">
                    <label><b>Email:</b></label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="txt">
                    <label><b>Phone:</b></label>
                    <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className="txt">
                    <label><b>Password:</b></label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="txt">
                    <label><b>Confirm Password:</b></label>
                    <input
                        type="password"
                        required
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                </div>

                {/* {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding</button>} */}
                <div className="loginButton">
                    <button>Signup</button>
                </div>

                <div className="signupbutton">
                    Already have an account? <Link to="/login">Login</Link>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;