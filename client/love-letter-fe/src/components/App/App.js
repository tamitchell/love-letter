import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import User from '../User/User'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Story from '../Stories/Stories'
import Edit from '../Edit/Edit'
import Form from '../Form/Form'
import axios from 'axios'


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    }
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }

  handleInput (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  handleLogOut() {
    this.setState({
      username: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }

  render() {
    return (
      <Router>
          <div className="App">
        <header className="App-header">
          <h1 className="App-title">Story Teller</h1>
          <nav>
              <Link to="/login"> Login </Link>
              <Link to="/signup">Signup</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/create">Write a Story</Link>
              <Link to="/stories_all">Stories</Link>
          </nav>
        </header>
        <Switch>
          <Route path="/login" render={(props) => {
            return(
              <Login />
            )
          }}
          />
          <Route path="/signup" render={(signdata) =>{
            return(
              <div>
              <Signup signdata={signdata}/>
              </div>
            )
          }}
          />
          <Route path="/profile" render={() => {
            return (
              <User />
            )
          }}
          />
          <Route path="/create" render={() => {
            return (
              <Form />
            )
          }}
          />
          <Route path="/stories_all" render={() => {
            return (
              <div>
                <Story />
                </div>
            )
          }}
          />
          <Route path="/story/edit/:id" component={Edit}
          />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
