import React, {Component} from 'react'

class Login extends Component {
    render(){
        return (
            <div className="card">
            <h1>User login</h1>
            <form action="/create" method="post">
            <div className="">
            <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" placeholder="username"/>
              </div>
              <div className="">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="password"/>
              </div>

              <input type="submit" value="sendcard"/>
            </form>
          </div>
        )
    }
}

export default Login