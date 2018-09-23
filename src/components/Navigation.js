import React from "react";
import { Link } from "react-router-dom";

export default function Navigation (props) {
  console.log(props.isLoggedIn)
  const isLoggedIn = props.isLoggedIn
  let loggedState
  if(isLoggedIn) {
    loggedState = (<div>
      <li className="tab">
        <Link to="/user/:id/profile">Profile</Link>
      </li>

      <li className="tab">
        <Link to="/logout" onClick={props.handleLogOut()}>Log Out</Link>
      </li>
    </div>
    )
  } else {
    loggedState = (<li className="tab">
                        <Link to="/all_stories" onClick={(e) => props.handleLogIn(e)}>Log In</Link>
                      </li>
    )
  }
  return (
    <ul className="tabs tabs-transparent">
      <li className="tab">
        <Link to="/">Home</Link>
      </li>
      <li className="tab">
        <Link to="/all_stories">All Stories</Link>
      </li>
      <li className="tab">
        <Link to="/story/create">Write A Story</Link>
      </li>
      {loggedState}
    </ul>
  );
};
