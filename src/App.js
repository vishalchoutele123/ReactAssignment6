import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
// import './Default.css';

import Home from './Home'
import Error from './Error'
import Nav from './Nav'
import Vehicle from './Vehicle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars Vehicles!</h1>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <hr />
          <Nav />
          <hr />

          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/vehicle/:vehicleId" component={Vehicle} />

            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
