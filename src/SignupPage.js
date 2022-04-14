import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div className="signup">

            <h2>Signup:</h2>
            <form onSubmit="">

                <div className="txt_field">
                    <label><b>Police station name:</b></label>
                    <input
                        type="text" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="txt_field">
                    <label>Address:</label>
                    <textarea
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className="txt_field">
                    <label><b>Password:</b></label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="txt_field">
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
                </div>
            </form>

        </div>
    );
}

export default SignupPage;