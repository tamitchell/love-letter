import React, { Component } from 'react';


class User extends Component {
  constructor(){
    super()
      this.state = {
        isLoggedIn: false,
        stories: []
      }
  }
   componentDidMount(){
     
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