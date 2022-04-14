import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">

            <h2>Login:</h2>
            <form onSubmit="">

                <div className="txt_field">
                    <label><b>Username:</b></label>
                    <input
                        type="text" required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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

                {/* {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding</button>} */}
                <div className="loginButton">
                    <button>Login</button>
                </div>

                <div className="signupbutton">
                    Not a member? <Link to="signup">Signup</Link>
                </div>
            </form>

        </div>
    );
}

export default LoginPage;