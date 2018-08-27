import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import User from '../User/User'
import Form from '../Form/Form'
import Stories from '../Stories/Stories'
import Navigation from '../Navigation/Navigation'

const signupURL = 'http://localhost:4000/user/signup'
const loginURL = 'http://localhost:4000/user/login'



class App extends Component {
  constructor(props) {
    super(props) 
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
  
    handleInput = e => {
        const userState = this.state;
        userState[e.target.name] = e.target.value;
        console.log(userState);
        this.setState(userState);
      }

    handleSignUp = e => {
      e.preventDefault();
      axios
        .post(signupURL, {
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          localStorage.token = response.data.token;
        })
        .catch(err => console.log(err));
    };
    
    handleLogIn (e) {
        e.preventDefault()
        axios.post(loginURL, {
            username: this.state.username,
            password: this.state.password
        })
        .then(res => {
            localStorage.token = res.data.token
            this.setState({isLoggedIn: true})
        })
        .catch(err => console.log(err))
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
      <div>
        <Navigation isLoggedIn={this.state.isLoggedIn}/>
        <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/signup' render={() => {
        return(
            <Signup 
            isLoggedIn={this.state.isLoggedIn} 
            handleInput={this.handleInput} 
            handleSignUp={this.handleSignUp} />
        )
    }}
    />
    <Route exact path='/login' render={() => {
        return(
            <Login isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
        )
    }}/>
    <Route exact path='/user/:id/profile' render={() => {
      return(
        <User />
      )
    }}/>
    <Route exact path='/story/create' component={Form}/>
    <Route exact path='/all_stories' component={Stories}/>
</Switch>
      </div>
    )
}
}

export default App;
