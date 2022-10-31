import { useState, useCallback, useEffect, useContext } from "react";
import { Link, Redirect, withRouter, useNavigate } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./backend/Auth";
import SyncAnimation from "./Animations/SyncAnimation";

//Imports for Google login
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';


import loginImage from "./Images/Login.jpg";

const Login = ({ history }) => {
    const [Email, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //Profile for google
    const { profile, setProfile } = useState(null);

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientID: clientID,
                scope: ''
            });
        };

        gapi.load('client:auth2', initClient);
    });


    const handleLogin = async (event) => {
        console.log(Email);
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, Email, password);
            history.push("/");
        } catch (error) {
            alert(error);
        }
    };

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to='/' />;
    }

    //ClientID
    const clientID = "639467517703-gtc8llmkbqrrthbonh198lnerghae6ka.apps.googleusercontent.com";

    const onSuccess = (res) => {
        setProfile(res.profileObj);
    }
    const onFailure = (err) => {
        console.log("failed", err);
    }
    const logout = () => {
        setProfile(null);
    }

    return (
        <>
            <div className="login">
                <figure className="figures">
                    <img src={loginImage} />
                    <figcaption>
                        <div className="websiteName">
                            <SyncAnimation />
                        </div>
                    </figcaption>
                </figure>

                <div className="welcomeBack">
                    <h2>Welcome back</h2>
                </div>

                <form className="loginForm" onSubmit={handleLogin}>
                    <div className='txt_field'>
                        <label>
                            <b>Email:</b>
                        </label>
                        <br />
                        <input
                            type='text'
                            required
                            value={Email}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='txt_field'>
                        <label>
                            <b>Password:</b>
                        </label>
                        <br />
                        <input
                            type='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="forgotPassword">Forgot password?</p>
                    </div>

                    <div>
                        <button className='loginButton' type='submit'>Login</button>
                    </div>
                </form>

                <div className='createAccount'>
                    Not a member? <Link to='signup'>Signup</Link>
                </div>

                <p className="orButton">OR</p>

                <div className="googleSignup">
                    <GoogleLogin
                        clientId={clientID}
                        render={(renderProps) => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} id='g'>
                                <img id="google" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi42NjY4IDE2LjI0MjVDMjYuNjY2OCAxNS40ODYxIDI2LjU5NzUgMTQuNzU4OSAyNi40Njg5IDE0LjA2MDdIMTYuMjE3OFYxOC4xODY3SDIyLjA3NTVDMjEuODIzMiAxOS41MjAxIDIxLjA1NjQgMjAuNjQ5OCAxOS45MDM2IDIxLjQwNjFWMjQuMDgyNUgyMy40MjEyQzI1LjQ3OTQgMjIuMjI1NSAyNi42NjY4IDE5LjQ5MSAyNi42NjY4IDE2LjI0MjVaIiBmaWxsPSIjNDI4NUY0Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYuMjE4NCAyNi42NjY4QzE5LjE1NzEgMjYuNjY2OCAyMS42MjA5IDI1LjcxMTYgMjMuNDIxOCAyNC4wODI1TDE5LjkwNDIgMjEuNDA2MUMxOC45Mjk1IDIyLjA0NjEgMTcuNjgyOCAyMi40MjQzIDE2LjIxODQgMjIuNDI0M0MxMy4zODM1IDIyLjQyNDMgMTAuOTg0IDIwLjU0OCAxMC4xMjgxIDE4LjAyNjdINi40OTE3VjIwLjc5MDRDOC4yODI2NyAyNC4yNzY0IDExLjk2MzYgMjYuNjY2OCAxNi4yMTg0IDI2LjY2NjhaIiBmaWxsPSIjMzRBODUzIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTAuMTI3NiAxOC4wMjY3QzkuOTA5ODcgMTcuMzg2NyA5Ljc4NjE5IDE2LjcwMzEgOS43ODYxOSAxNkM5Ljc4NjE5IDE1LjI5NyA5LjkwOTg3IDE0LjYxMzQgMTAuMTI3NiAxMy45NzM0VjExLjIwOTdINi40OTEyQzUuNzU0MDMgMTIuNjQ5NyA1LjMzMzUgMTQuMjc4OCA1LjMzMzUgMTZDNS4zMzM1IDE3LjcyMTIgNS43NTQwMyAxOS4zNTAzIDYuNDkxMiAyMC43OTAzTDEwLjEyNzYgMTguMDI2N1oiIGZpbGw9IiNGQkJDMDUiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi4yMTc5IDkuNTc1ODFDMTcuODE1OSA5LjU3NTgxIDE5LjI1MDYgMTAuMTE0IDIwLjM3ODcgMTEuMTcxTDIzLjUwMDUgOC4xMTE1NkMyMS42MTU1IDYuMzkwMzUgMTkuMTUxNyA1LjMzMzM3IDE2LjIxNzkgNS4zMzMzN0MxMS45NjMxIDUuMzMzMzcgOC4yODIxOCA3LjcyMzY4IDYuNDkxMjEgMTEuMjA5OEwxMC4xMjc2IDEzLjk3MzRDMTAuOTgzNSAxMS40NTIyIDEzLjM4MyA5LjU3NTgxIDE2LjIxNzkgOS41NzU4MVoiIGZpbGw9IiNFQTQzMzUiLz4KPC9zdmc+Cg==" alt="" />
                                Continue with Google
                            </button>
                        )}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                    />
                </div>
            </div>
        </>
    );
}

export default Login;