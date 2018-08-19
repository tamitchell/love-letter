import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Story from '../Stories/Stories'
import Edit from '../Edit/Edit'
import Form from '../Form/Form'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
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

  handleSignUp(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/user/signup', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .catch(err => console.log(err))
  }

  handleLogIn(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/user/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
  }

  handleLogOut() {
    this.setState({
      email: '',
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
          <Route path="/signup" render={(props) =>{
            return(
              <div>
              <Signup />
              </div>
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
