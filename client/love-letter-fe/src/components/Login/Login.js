import React, {Component} from 'react'
import axios from 'axios'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onChange = e => {
        const loginState = this.state;
        loginState[e.target.name] = e.target.value;
        this.setState(loginState);
      };

    handleLogIn(e) {
        e.preventDefault()
        axios.post('http://localhost:3001/user/login', {
          username: this.state.username,
          password: this.state.password
        })
        .then(response => {
          localStorage.token = response.data.token
          this.setState({isLoggedIn: true})
        })
        .catch(err => console.log(err))
      }

    render(){
        return (
            <div className="card">
            <h1>User login</h1>
            <form onSubmit={this.handleLogIn.bind(this)}>
            <div className="">
            <label htmlFor="username">Username</label>
              <input type="text" 
            onChange={this.onChange}
              id="username" 
              name="username" 
              placeholder="username"/>
              </div>
              <div className="">
              <label htmlFor="password">Password</label>
              <input type="password"
              onChange={this.onChange}
            id="password" 
            name="password" 
            placeholder="password"/>
              </div>

              <input type="submit" value="sendcard"/>
            </form>
          </div>
        )
    }
}

export default Login