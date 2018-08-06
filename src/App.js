import React, { Component } from 'react';
import './App.css'
import Home from './pages/Home';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <Home />
      </div>  
    );
  }
}

export default App;