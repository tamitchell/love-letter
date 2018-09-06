import React, { Component } from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../Home/Home";
import StoriesHOC from "../Story/GetAllStories/Stories";
import Navigation from "../Navigation/Navigation";
import ShowWholeStory from "../Story/WholeStory/ShowWholeStory";
import Edit from "../Story/Edit/Edit";
import Form from "../Story/Form/Form";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/story/create" component={Form} />
            <Route
              path="/all_stories"
              render={() => {
                return <StoriesHOC />;
              }}
            />
            <Route exact path="/story/:id" render={ShowWholeStory} />
            <Route
              exact
              path="/story/:id/edit"
              render={() => {
                return <Edit />;
              }}
            />
            <Route exact path="/story/new" render={Form} />
            <Route exact path="/about" />
          </Switch>
        </div>
      </Router>
    );
  }
}
