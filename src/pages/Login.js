import React, { Component } from 'react';
import LoginForm from './login/LoginForm';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>This is the login page</h1>
        < LoginForm />
      </div>
    )
  }



}

export default Login;