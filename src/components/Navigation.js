import React from "react";
import {Link} from "react-router-dom";
import {Row, Col} from 'react-materialize'

const Navigation = () => {
  return (
    <nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="https://tamitchell.github.io/" class="brand-logo">Logo</a>
    </div>
    <div class="nav-content">
      <ul class="tabs tabs-transparent">
        <li class="tab"><Link to="/">Home</Link></li>
        <li class="tab"><Link to="/all_stories">All Stories</Link></li>
        <li class="tab"><Link to="/story/create">Write A Story</Link></li>
        <li class="tab"><Link to="/user/:id/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
  );
}

export default Navigation

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

