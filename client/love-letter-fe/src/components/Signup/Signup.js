import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange = e => {
    const userState = this.state;
    userState[e.target.name] = e.target.value;
    console.log(userState);
    this.setState(userState);
  };

  handleSignUp = e => {
    console.log(this.state);
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        // this.props.history.push("/profile");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="card">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSignUp.bind(this)}>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              // value={this.props.username}
              onChange={this.onChange}
              id="username"
              name="username"
              placeholder="username"
            />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              // value={this.state.password}
              onChange={this.onChange}
              id="password"
              name="password"
              placeholder="password"
            />
          </div>

          <input type="submit" value="create user" />
        </form>
      </div>
    );
  }
}

export default Signup;
