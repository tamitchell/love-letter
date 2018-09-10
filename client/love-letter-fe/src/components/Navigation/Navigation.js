import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="http://tamitchell.github.io/" className="brand-logo">
              StoryTeller
            </a>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <Link to="/">Home</Link>
              </li>
              <li className="tab">
                <Link to="/all_stories">View All Stories</Link>
              </li>
              <li className="tab">
              <Link to="/story/create">Write A Story</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
