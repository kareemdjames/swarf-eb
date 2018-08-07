import React, { Component } from 'react';
import database from '../../firebase';

class ViewTicketsTable extends Component {
  constructor() {
    super();
    this.state = {
      tickets: []
    }
  }

  componentDidMount() {
    const itemsRef = database.database().ref('/helpdesk/tickets');
    console.log(itemsRef);
    itemsRef.on('value', (snapshot) => {
      let tickets = snapshot.val();
      console.log('tickets');
      let newState = [];
      for(let ticket in tickets) {
        newState.push({
          id:ticket,
          email:tickets[ticket].email,
          issueType:tickets[ticket].issueType,
          department:tickets[ticket].department,
          comments:tickets[ticket].comments,
          date:tickets[ticket].date
        })
        this.setState({
          tickets: newState
        });
      }
      console.log(this.state.tickets);
    })
  }

  render() {
    return (
      <table className="table">
        <thead>
        <tr> 
            <th>Email</th>
            <th>Issue Type</th> 
            <th>Department</th> 
            <th>Comments</th> 
            <th>Date</th> 
        </tr>
        </thead>
        <tbody>
          {this.state.tickets.map((item) => {
            return (
              <tr key={item.id}>
              <td>{item.email}</td>
              <td>{item.issueType}</td> 
               <td>{item.department}</td> 
              <td>{item.comments}</td> 
              <td>{item.date}</td> 
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

export default ViewTicketsTable;