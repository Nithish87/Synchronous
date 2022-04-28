import { useState } from "react";
import { Link } from "react-router-dom";
import LeafletMap from "./LeafletMap";
import Search from "./Search";


const SignupPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    //const [location, setLocation] = useState('');

    //const [add,setAdd]=useState('');

    const [selectPosition, setSelectPosition] = useState(null);

    const [latitude,setLatitude]=useState("");
    const [longitude,setLongitude]=useState("");
    const handleChange=(lat,lon)=>{
        setLatitude(lat);
        setLongitude(lon);
        // console.log(latitude);
    }

    //Leaflet


    return (
        <div className="signup">

            <h2>Signup:</h2>
            <form>

                <div className="txt">
                    <label><b>Police station name:</b></label>
                    <input
                        type="text" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="txt_field">
                    <label><b>Location:</b></label>
                    <div className="searchBar"><Search handleChange={handleChange}/></div>
                    <br></br>
                    <LeafletMap latitude={latitude} longitude={longitude}/>
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
                <div className="signinButton">
                    <button>Signup</button>
                </div>

                <div className="signupbutton">
                    <b>Already have an account?</b> <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;