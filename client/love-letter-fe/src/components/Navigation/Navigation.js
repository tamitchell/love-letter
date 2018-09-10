import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav class="nav-extended">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              StoryTeller
            </a>
          </div>
          <div class="nav-content">
            <ul class="tabs tabs-transparent">
              <li class="tab">
                <Link to="/">Home</Link>
              </li>
              <li class="tab">
                <Link to="/all_stories">View All Stories</Link>
              </li>
              <li class="tab">
              <Link to="/story/create">Write A Story</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigation;
