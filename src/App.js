import React, { Component } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { Button } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-bootstrap';
import './App.css'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        <h1>Welcome from React</h1>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="danger">Danger</Button>
      </div>  
    );
  }
}

export default App;