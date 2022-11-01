import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import LeafletMap from "./LeafletMap";
import Search from "./Search";
import { auth, db } from "./backend/firebase-config";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { ref, set } from "firebase/database";
import MyGoogleMap from './MyGoogleMap';
import SyncAnimation from "./Animations/SyncAnimation";

import signupImage from "./Images/Signup.jpg";



const Signup = ({ history }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState(false);
    const [type, setType] = useState("Organisation Type");
    const [Error, setError] = useState("");
    const [selectPosition, setSelectPosition] = useState(null);

    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const handleChange = (lat, lon) => {
        setLatitude(lat);
        setLongitude(lon);
        // console.log(latitude);
    };

    //signup page load
    const [signupState, setSignupState] = useState(false);

    const handleClick = () => {
        if (state == false) setState(true);
        else if (state == true) setState(false);
        setSignupState(true);
    };
    const handleSignUp = async (event) => {
        event.preventDefault();
        if (password !== cPassword) {
            return setError("Passwords Do not match");
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                set(ref(db, "users/" + userCred.user.uid), {
                    type: type,
                    orgName: name,
                    location: {
                        latitude: latitude,
                        longitude: longitude,
                    },
                    email: email,
                    phoneNo: phone,
                })
                    .then(() => {
                        history.push("/");
                    })
                    .catch((error) => {
                        alert("Error from DB" + error);
                        const user = auth.currentUser;
                        console.log(user);
                        deleteUser(user);
                    });
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const mystyle = {
        marginTop: "5px",
        borderRadius: "7px",
    }

    return (
        <div className="signup">
            <figure className="figures">
                <img src={signupImage} height="703" style={mystyle} />
                <figcaption>
                    <div className="websiteName">
                        <SyncAnimation />
                    </div>
                </figcaption>
            </figure>

            <div className="createAccount">
                <h2>Create Account</h2>
            </div>

            <form className="signupForm" onSubmit={handleSignUp}>
                <div className="dropdown">
                    <button id="drop" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {type}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" onClick={() => {
                            setType("Police");
                        }}>Police</a></li>
                        <li><a className="dropdown-item" onClick={() => {
                            setType("Hospital");
                        }}>Hospital</a></li>
                        <li><a className="dropdown-item" onClick={() => {
                            setType("FireStation");
                        }}>Fire Station</a></li>
                    </ul>
                </div>

                <div className="signup_field">
                    <label>
                        <b>Organisation Name:</b>
                    </label>
                    <br></br>
                    <input
                        type='text'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='signup_field'>
                    <label>
                        <b>Location:</b>
                    </label>
                    <br></br>
                    <Search handleChange={handleChange} />
                </div>

                <div className='signup_field'>
                    <label>
                        <b>Email:</b>
                    </label>
                    <br></br>
                    <input
                        type='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='signup_field'>
                    <label>
                        <b>Phone:</b>
                    </label>
                    <br></br>
                    <input
                        type='tel'
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className='signup_field'>
                    <label>
                        <b>Password:</b>
                    </label>
                    <br></br>
                    <input
                        type='password'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='signup_field'>
                    <label>
                        <b>Confirm Password:</b>
                    </label>
                    <br></br>
                    <input
                        type='password'
                        required
                        value={cPassword}
                        onChange={(e) => setCPassword(e.target.value)}
                    />
                </div>

                <div>
                    <button className='signupButton'>Signup</button>
                </div>
            </form>

            <div className='linkToSignup'>
                Already have an account?<Link to='/login'>Login</Link>
            </div>
        </div>
    );
}

export default Signup;