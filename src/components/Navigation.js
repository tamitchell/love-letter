import React from "react";
import { Link } from "react-router-dom";
import Login from './Login'
import { Tab, Tabs } from "react-materialize";

export default function Navigation(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn)
  let loggedState;
  if (isLoggedIn) {
    loggedState = (<div>
        <Tab title="Profile">
        <Link to="/user/:id/profile">
          Profile
        </Link>
        </Tab>

        <Tab title="Log Out">
         <Link to="/logout" onClick={props.handleLogOut}>
            Log Out
          
        </Link>
        </Tab>
      </div>
    );
  } else {
    loggedState = (
      <Tab title="Login">
      <Login
       isLoggedIn={props.isLoggedIn}
       handleLogIn={props.handleLogIn}
      />
      </Tab>
    );
  }
  return (
    <div>

    <Tabs className="transparent">
      <Tab title="Home">
        <Link to="/">
        Home
        </Link>

      </Tab>
      <Tab title="All Stories">
      <Link to="/all_stories">
        All Stories
      </Link>
      </Tab>
      <Tab title="Write a Story">
      <Link to="/story/create">
        Write A Story
      </Link>
      </Tab>
      {loggedState}
    </Tabs>
    </div>
  );
}
