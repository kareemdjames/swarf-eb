import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <div>
        {
          this.props.authenticated
          ?
          (
            <Fragment>
              <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                  <Navbar.Brand>
                    <Link to='/'>HelpDesk</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                  <Nav>
                    <Link to="/view-tickets">
                      <NavItem>Tickets</NavItem>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to="/add-ticket">
                      <NavItem>Add new ticket</NavItem>
                    </Link>
                  </Nav>
                  <Nav pullRight>
                    <Link to="/logout">
                      <NavItem>Logout</NavItem>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Fragment>
          ) : (
            <Fragment>
              <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>
                  <Link to="#brand">HelpDesk</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
                <Navbar.Collapse>
                  <Nav pullRight>
                    <Link to="/login">
                      <NavItem>Register/Login</NavItem>
                    </Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Fragment>
          )
        } 
      </div>
    );
  }
}

export default Nav;