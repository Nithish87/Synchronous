import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { AuthProvider } from "./backend/Auth";
import PrivateRoute from "./backend/PrivateRoute.js";
import Login from "./Login";
// import Signup from "./Signup";
import SignupPage from "./SignupPage";
import Signup from "./Signup";
import Footer from "./Footer.js";
import './css/App.css'
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar/>
          <div className="content">
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
