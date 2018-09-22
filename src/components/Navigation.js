import React from "react";
import { Link, withRouter } from "react-router-dom";
const Navigation = () => {
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
      <li className="tab">
        <Link to="/user/:id/profile">Profile</Link>
      </li>
    </ul>
  );
};

export default withRouter(Navigation);

/* {this.props.isLoggedIn ? (
                    <div>
                      <li>
                        <Link to="/user/:id/profile">View Profile</Link>
                      </li>
    
                      <li>
                        <Link to="/logout">Log Out</Link>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li>
                        <Link to="/login">Log In</Link>
                      </li>
                      <li>
                        <Link to="/signup">Sign Up</Link>
                      </li>
                    </div>
                  )} */
