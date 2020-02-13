import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/layout/NavBar"
import Dashboard from './components/layout/Dashboard';
import backgroundImage from "./background-pokemon.png";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Pokemon from "./components/pokemon/Pokemon"

class App extends Component  {
  render() {
    return (
      <Router>
        <div 
          className="App"
          style= {{background: `url(${backgroundImage})`}}
        >
        <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />          
              <Dashboard />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
