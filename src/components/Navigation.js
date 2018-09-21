import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

export default function Navigation() {
  return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all_stories">View All Stories</Link>
            </li>
            <li>
              <Link to="/story/create">Write A Story</Link>
            </li>

          </ul>
        </div>
      </nav>
  );
}

{
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
}
