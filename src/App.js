import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import StartPage from "./StartPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";
import { AuthProvider } from "./backend/Auth";
import PrivateRoute from "./backend/PrivateRoute.js";
import NavbarSL from "./NavBarSL";
import Login from "./Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='App'>
          <div className='content'>
            <Switch>
              <PrivateRoute exact path='/' component={HomePage} />
              {/* <Route exact path='/start'>
                <StartPage />
              </Route> */}
              <Route exact path='/login'>
                {/* <NavbarSL/> */}
                <Login/>
              </Route>

              <Route exact path='/signup'>
                <NavbarSL />
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
