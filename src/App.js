import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import StartPage from "./StartPage";
import SignupPage from "./SignupPage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path='/start'>
              <StartPage />
            </Route>
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
  );
}

export default App;
