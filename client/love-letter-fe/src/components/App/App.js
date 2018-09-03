import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
// import Signup from "../Signup/Signup";
// import Login from "../Login/Login";
// import User from "../User/User";
import Form from "../Form/Form";
import Stories from "../Story/GetAllStories/Stories";
import Navigation from "../Navigation/Navigation";
import ShowWholeStory from '../Story/WholeStory/ShowWholeStory'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/story/create" component={Form} />
          <Route exact path="/all_stories" component={Stories} />
          <Route exact path="/story/:id" render={ShowWholeStory} />
          <Route exact path="/about"/>
        </Switch>
      </div>
    );
  }
}

export default App;
