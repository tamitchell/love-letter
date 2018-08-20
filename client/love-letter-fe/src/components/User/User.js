import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'

class User extends Component {
  constructor(){
    super()
      this.state = {
        isLoggedIn: false,
        stories: []
      }
  }
    render() {
      return (
        <div>
          <h1> Profile </h1>
        </div>
      )
    }
}

export default User