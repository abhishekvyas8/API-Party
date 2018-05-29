import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import logo from './logo.svg';
import Github from './Github.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h3> Ain't no party like an </h3>
          <h1> API PARTY </h1>
        </div>

        <ul className= "navLinks">
          <li> 
            <NavLink to = "/github">Github API </NavLink> 
          </li>
        </ul>

        <Switch>
          <Route path= "/github"  component = {Github}/>
          <Route render = {() => <p>To get started, click one of the links above</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
