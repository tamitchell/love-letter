import React, { Component } from "react";
import axios from "axios";

class Signup extends Component {

  render() {
    return (
      <div className="card">
        <h1>Sign Up</h1>
        <form>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={this.props.handleInput}
              name="username"
              placeholder="username"
            />
          </div>

          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.props.handleInput}
              name="password"
              placeholder="password"
            />
          </div>

          <input type="submit" value="create user" onClick={this.props.handleSignUp} />
        </form>
      </div>
    );
  }
}

export default Signup;
