import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navbar from './Navbar';
import LoginPage from './LoginPage';
import StartPage from './StartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/start">
              <StartPage/>
            </Route>

            <Route exact path="/login">
              <LoginPage/>
            </Route>
          </Switch>
        </div>
      
      </div>
    </Router>
    
  );
}

export default App;
