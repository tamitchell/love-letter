import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import {Tabs, Tab} from 'react-materialize'
export default function Navigation(props) {
  const isLoggedIn = props.isLoggedIn;
  console.log(props);
  let loggedState;
  if (isLoggedIn) {
    loggedState = (
      <div className="tabs tabs-transparent">
        <Link className="tab col s3" to="/user/:id/profile">
          {/* <Tab title="Profile"> */}
          Profile
          {/* </Tab> */}
        </Link>

        <Link className="tab col s3" to="" title="Log Out" onClick={props.handleLogOut}>
          Log Out
        </Link>
      </div>
    );
  } else {
    loggedState = (
        <Login className="tab col s3" handleLogIn={props.handleLogIn} />
    );
  }
  return (
    <div className="tabs tabs-transparent">
      {/* <Tab title="Home"> */}
        <Link className="tab col s3" to="/">
        Home
        </Link>
      {/* </Tab> */}
      {/* <Tab title="Browse"> */}
      <Link className="tab col s3" to="/all_stories">
        Browse
      </Link>
      {/* </Tab> */}
      {/* <Tab title="Write"> */}
      <Link className="tab col s3" to="/story/create">
        Write A Story
      </Link>
      {/* </Tab> */}
      {loggedState}
    </div>

  );
}
