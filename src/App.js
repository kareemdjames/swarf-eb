import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import AddTicket from './pages/AddTicket';
import ViewTickets from './pages/ViewTickets';

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      data: ''
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/add-ticket' component={AddTicket} />
            <Route exact path='/view-tickets' component={ViewTickets} />
          </Switch>
        </div>
      </Router>  
    );
  }
}

export default App;