import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Form from '../Form/Form'
import Card from '../Card/Card'
import Button from '../Button/Button'

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the LOVE Module</h1>
          <nav>
              <Link to="/"> Home </Link>
              <Link to="/new">Create A Card</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/new" render={(props) =>{
            return(
              <div>
              <Form />
              </div>
            )
          }}
          />
          <Route path="/" render={(props) => {
            return (
              <div>
                <Card />
                <Button />
                </div>
            )
          }}
          />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
