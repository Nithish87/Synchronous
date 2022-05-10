import { useState, useCallback } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { auth } from "./backend/firebase-config";
import { useContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./backend/Auth";
const LoginPage = ({ history }) => {
  const [Email, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
  return (
    <div className='login'>
      <h2>Login:</h2>
      <form onSubmit={handleLogin}>
        <div className='txt_field'>
          <label>
            <b>Email:</b>
          </label>
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
          <input
            type='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding</button>} */}
        <div className='loginButton'>
          <button type='submit'>Login</button>
        </div>

        <div className='signupbutton'>
          Not a member? <Link to='signup'>Signup</Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginPage);
