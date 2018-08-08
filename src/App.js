import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
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
        <div className="container"> {
          this.state.authenticated
          ?
          (
            <Fragment>
              <Nav authenticated={this.state.authenticated} />
              <Route path='/' render={() => (<Home userInfo = {this.state.data} />)} />
              <Route path='/view-tickets' component={ViewTickets} />
              <Route exact path='/add-ticket' component={AddTicket} />
            </Fragment>
          )
          :
          (
            <Fragment>
              <Nav authenticated={this.state.authenticated} />
              <Route exact path='/' component={Login} />
            </Fragment>
          )
        }
        </div>
      </Router>  
    );
  }
}

export default App;