import React, { Fragment } from "react";
import {
  Row,
  Button,
  Col,
  Card,
  CardTitle,
  Input
} from "react-materialize";

const Login = props => {
  return (
    <Fragment>
      <Row className="wrapper">

      <Row className="login-container">
        <Col 
        className="login-component"
        l={6} m={9} s={12}>
          <Card
            horizontal
            header={
              <CardTitle
                className="hide-on-med-and-down"
                image="https://cdn.dribbble.com/users/1212356/screenshots/2985985/w_cufsono_016.gif"
              />
            }
          >
            <form>
            <h5>Register</h5>
            <p>
              Don't have an account? Create one, it takes less than a minute.
            </p>
              <Input
                placeholder="Placeholder"
                name="username"
                autoComplete="username"
                s={12}
                label="Username"
              />
              <Input type="email" autoComplete="email" name="email" label="Email" s={12} />
              <Input type="password" name="password" autoComplete="new-password" label="Password" s={12} />
              <Input s={12} m={12} l={12} type="submit" className="btn login-btn" defaultValue="submit"  />
            </form>

            <Col 
            className="social-media"
            s={12}>
              <p>OR</p>
              <a onClick={props.handleLogIn}>Log in with Google</a>
            </Col>
          </Card>
        </Col>
      </Row>
      </Row>

      {/* <Modal
        className="login-modal transparent"
        trigger={
          <h1 className="tab" waves="light">
            Login
          </h1>
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
              <form>
                <Input
                  placeholder="Placeholder"
                  name="username"
                  s={12}
                  label="Username"
                />
                <Input type="email" name="email" label="Email" s={12} />
                <Input type="password" name="email" label="Password" s={12} />
                <Input type="submit" label="Submit" />
              </form>

              <Col s={12}>
                <p>Login with social media</p>
                <Button onClick={props.handleLogIn}>Google</Button>
              </Col>
            </Card>
          </Col>
        </Row>
      </Modal> */}
    </Fragment>
  );
};

export default Login;
