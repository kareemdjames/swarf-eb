import React, { Component } from 'react';
import Nav from '../components/nav/Nav';

class AddTicket extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
        <h1>Add Ticket</h1>
      </div>
    );
  }

}

export default AddTicket;
