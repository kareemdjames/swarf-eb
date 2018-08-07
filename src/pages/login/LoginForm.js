import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    }
  }

  render() {
    if(this.state.redirect === true) {
      return <Redirect to='/' />
    } 
    return (
      <Grid>
        <form 
          className='form-signin' 
          onSubmit={(event)=>{this.authWithEmailPassword(event)}} 
          inputRef={(form)=>{this.login.form = form}}>
          <FormGroup controlId='form-signin-heading'>
            <ControlLabel>Username</ControlLabel>
            <FormControl
              type="email"
              placeholder="Email Address"
              required inputRef={(input)=>{this.emailField = input}} 
            />
          </FormGroup>
          <FormGroup controlId='password'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type="password"
              placeholder="Password"
              required inputRef={(input)=>{this.passwordField = input}}
            />
          </FormGroup>
          <Checkbox 
            className="checkbox"
            id="rememberme"
            value="remember-me"
          >
            Remember Me
          </Checkbox>
          <Button type="submit" bsStyle="primary" bsSize="large" block>Login</Button>
          <br />
        </form>
      </Grid>
    )
      
    
  }
}

export default LoginForm;