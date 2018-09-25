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
              <Input type="password" name="password" autocomplete="new-password" label="Password" s={12} />
              <Input type="submit" label="Submit" />
            </form>

            <Col s={12}>
              <p>Login with social media</p>
              <Button onClick={props.handleLogIn}>Google</Button>
            </Col>
          </Card>
        </Col>
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
