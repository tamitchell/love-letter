import React, {Component} from "react";
import {Tab, Row, Button, Col, Card, CardTitle, Modal, Input } from "react-materialize";

class Login extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      username: '',
      email: '',
      password: ''

    }
  }

  handleInput = e => {
    const userState = this.state;
    userState[e.target.name] = e.target.value;
    this.setState(userState);
  };

  render() {

    console.log(this.props.handleLogIn)
    return (
      <Modal
        className="login-modal transparent"
        trigger={
          <li className="tab" waves="light">
            Login
          </li>
        }
      >
        <Row>
          <Col m={12} s={12}>
            <Card
              horizontal
              header={
                <CardTitle
                  className="hide-on-med-and-down"
                  image="https://cdn.dribbble.com/users/1212356/screenshots/2985985/w_cufsono_016.gif"
                />
              }
              // actions={[<a href="#">This is a link</a>]}
            >
              <h4>Register</h4>
              <p>
                Don't have an account? Create one, it takes less than a minute.
              </p>
              <Input placeholder="Placeholder" s={12} label="Username" />
              <Input type="email" label="Email" s={12} />
              <Input type="password" label="Password" s={12} />
              <Input type="submit" label="Submit" />
  
              <Col s={12}>
                <p>Login with social media</p>
                <Button onClick={this.props.handleLogIn}>Google</Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Modal>
    );
  }
};

export default Login;
