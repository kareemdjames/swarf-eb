import React, { Component } from 'react';
import ViewTicketsTable from './viewTickets/ViewTicketsTable';

class ViewTickets extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <h1>View Tickets</h1>
        <ViewTicketsTable />
      </div>
    )
  }
}

export default ViewTickets;