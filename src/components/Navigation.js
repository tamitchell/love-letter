import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navigation(props) {
  const isLoggedIn = props.isLoggedIn;
  let loggedState;
  if (isLoggedIn) {
    loggedState = (<div>
        <Link className="nav-item" to="/user/:id/profile" title="Profile">
          Profile
        </Link>

        <Link
          className="nav-item"
          to=""
          title="Log Out"
          onClick={props.handleLogOut}
        >
          Log Out
        </Link>
      </div>
    );
  } else {
    loggedState = (<Link className="nav-item" to="/login">
        Login
      </Link>
    );
  }
  return (
    <Fragment>
      <nav className="nav-extended transparent">
        <div className="nav-wrapper">
          <div className="center">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/browse">
              Browse
            </Link>
            <Link className="nav-item" to="/story/new">
              Write
            </Link>
            {loggedState}
          </div>
        </div>
      </nav>
    </Fragment>
  )
}