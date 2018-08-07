import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import AddTicket from './pages/AddTicket';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/add' component={AddTicket} />

          </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;