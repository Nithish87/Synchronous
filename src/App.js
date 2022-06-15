import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import StartPage from "./StartPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import { AuthProvider } from "./backend/Auth";
import PrivateRoute from "./backend/PrivateRoute.js";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='content'>
            <Switch>
              <PrivateRoute exact path='/' component={HomePage} />
              {/* <Route exact path='/start'>
                <StartPage />
              </Route> */}
              <Route exact path='/login'>
                <LoginPage />
              </Route>

              <Route exact path='/signup'>
                <SignupPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
