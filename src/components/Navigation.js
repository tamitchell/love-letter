import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import {Tabs, Tab} from 'react-materialize'
import Home from "./Home";
import Form from "./Form";
import StoriesList from "./StoriesList";

export default function Navigation(props) {
  const isLoggedIn = props.isLoggedIn;
  let loggedState;
  if (isLoggedIn) {
    loggedState = (
      <div className="tabs tabs-transparent">
          <Tab title="Profile">
          Profile
          </Tab>

        <Link className="tab col s3" to="" title="Log Out" onClick={props.handleLogOut}>
          Log Out
        </Link>
      </div>
    );
  } else {
    loggedState = (
      <Tab title="Log In">
      <Login className="tab col s3" handleLogIn={props.handleLogIn} />
      </Tab>
    );
  }
  return (
    <Tabs className="tabs tabs-transparent">
      <Tab title="Home">
        <Home />
      </Tab>
      <Tab title="Browse">
        <StoriesList
        editStory={props.editStory}
        stories={props.stories}
        />
       </Tab>
      <Tab title="Write">
        <Form />
      </Tab>
      {loggedState}
    </Tabs>

  );
}
