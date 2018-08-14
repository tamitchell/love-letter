import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Card from '../Card/Card'
import Button from '../Button/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the LOVE Module</h1>
        </header>
        <Card />
        <Button />
      </div>
    );
  }
}

export default App;
