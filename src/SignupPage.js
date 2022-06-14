import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import LeafletMap from "./LeafletMap";
import Search from "./Search";
import { auth, db } from "./backend/firebase-config";
import { createUserWithEmailAndPassword, deleteUser } from "firebase/auth";
import { ref, set } from "firebase/database";
import MyGoogleMap from "./MyGoogleMap";

const SignupPage = ({ history }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState(false);
  const [type, setType] = useState("Select Emergency Organisation");
  const [Error, setError] = useState("");
  const [selectPosition, setSelectPosition] = useState(null);

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const handleChange = (lat, lon) => {
    setLatitude(lat);
    setLongitude(lon);
    // console.log(latitude);
  };

  const handleClick = () => {
    if (state == false) setState(true);
    else if (state == true) setState(false);
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
            console.log("/ pushed");
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

  return (
    <div className='signupTop'>
      <form className='signup' onSubmit={handleSignUp}>
        <h2>Signup:</h2>
        {Error ? Error : ""}
        <div class='organisationType'>
          <button
            class='dropDownButton'
            type='button'
            id='dropdownMenuButton1'
            data-bs-toggle='dropdown'
            aria-expanded='false'
            onClick={handleClick}>
            {type}
          </button>
          {state && (
            <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              <li
                onClick={() => {
                  {
                    /*Sets the type to police*/
                  }
                  setType("Police Station");
                  setState(false);
                }}>
                Police Station
              </li>
              <hr></hr>
              <li
                onClick={() => {
                  {
                    /*Sets the type to hospital*/
                  }
                  setType("Hospital");
                  setState(false);
                }}>
                Hospital
              </li>
            </ul>
          )}
        </div>

        <div className='txt'>
          <label>
            <b>Organisation Name:</b>
          </label>
          <input
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='txt_field'>
          <label>
            <b>Location:</b>
          </label>
          <Search handleChange={handleChange} />
          {/* <LeafletMap latitude={latitude} longitude={longitude} /> */}
          {/* <MyGoogleMap /> */}
        </div>

        <div className='txt'>
          <label>
            <b>Email:{email}</b>
          </label>
          <input
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='txt'>
          <label>
            <b>Phone:</b>
          </label>
          <input
            type='tel'
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className='txt'>
          <label>
            <b>Password:</b>
          </label>
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='txt'>
          <label>
            <b>Confirm Password:</b>
          </label>
          <input
            type='password'
            required
            value={cPassword}
            onChange={(e) => setCPassword(e.target.value)}
          />
        </div>

        {/* {!isPending && <button>Add blog</button>}
     {isPending && <button disabled>Adding</button>} */}
        <div className='signupB'>
          <button>Signup</button>
        </div>

        <div className='signupbutton'>
          Already have an account?<Link to='/login'>Login</Link>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignupPage);
