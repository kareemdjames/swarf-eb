import React, { Component } from 'react';
import Nav from '../components/nav/Nav';
import AddTicketForm from '../pages/addTicket/AddTicketForm';

class AddTicket extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <Nav />
        <h1>Add Ticket</h1>
        <AddTicketForm />
      </div>
    );
  }

}

export default AddTicket;
