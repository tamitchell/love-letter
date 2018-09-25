
import React from "react";
import { Link } from "react-router-dom";


export default function Navigation(props) {
  const isLoggedIn = props.isLoggedIn;
  let loggedState;
  if (isLoggedIn) {
    loggedState = (
      <div>
          <Link className="tab" to="/user/:id/profile" title="Profile">
          Profile
          </Link>

        <Link className="tab" to="" title="Log Out" onClick={props.handleLogOut}>
          Log Out
        </Link>
      </div>
    );
  } else {
    loggedState = (
      <Link className="tab" to="/login">
      Login
      </Link>
    );
  }
  return (
    <ul className="tabs transparent">
      <Link className="tab" to="/">
      Home
      </Link>
      
      {/* <Tab className="active" title="Home">
        <Home />
      </Tab> */}
      <Link to="/browse" className="tab">
      Browse
      </Link>
      {/* <Tab title="Browse">
        <StoriesList
        editStory={props.editStory}
        stories={props.stories}
        />
       </Tab> */}

       <Link className="tab" to="/story/new">
       Write
       </Link>
      {/* <Tab title="Write">
        <Form />
      </Tab> */}
      {loggedState}
</ul>
  );
}
