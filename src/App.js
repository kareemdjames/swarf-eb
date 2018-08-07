import React, { Component } from 'react';
import './App.css'
import Nav from './components/nav/Nav';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Nav />
      </div>  
    );
  }
}

export default App;