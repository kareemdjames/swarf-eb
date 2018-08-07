import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">HelpDesk</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Add Ticket
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}

export default Home;