import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase, { auth, provider } from "../firebase.js";
import Home from "./Home";
import Login from "./Login";
import User from "./User";
import Form from "./Form";
import StoriesList from "./StoriesList";
import Navigation from "./Navigation";
import Edit from "./Edit";
import StoryItem from "./StoryShow.js";
import About from "./About";
import "../sass/App.scss";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
      stories: []
    };
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let storiesArr = snapshot.val();
      let fetchedStories = [];
      for (let item in storiesArr) {
        fetchedStories.push({
          key: item,
          book: storiesArr[item].book
        });
      }
      this.setState({
        stories: fetchedStories
      });
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({isLoggedIn: user.I})
      } 
    });
  }

  handleInput = e => {
    const userState = this.state;
    userState[e.target.name] = e.target.value;
    this.setState(userState);
  };

  handleLogIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider)
    .then((result) => {
      const isLoggedIn = result.user.I;
      this.setState({
        isLoggedIn: isLoggedIn
      });
    });
  }

  handleLogOut = () => {
    auth.signOut()
    .then(() => {
      this.setState({
        isLoggedIn: null
      });
    });
  };

  render(props) {
    return (
      <div>
        <Navigation
          {...props}
          isLoggedIn={this.state.isLoggedIn}
          handleLogIn={this.handleLogIn}
          handleLogOut={this.handleLogOut}
        />
        <Switch>
          <Route exact path="/" render={Home} />
          <Route
            exact
            path="/login"
            render={() => {
              return (
                <Login
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleLogIn={this.handleLogIn}
                />
              );
            }}
          />
          <Route
            exact
            path="/user/:id/profile"
            render={() => {
              return <User />;
            }}
          />
          <Route
          exact
            path="/story/edit/:id"
            render={(props )=> {
              return <Edit handlineInput={this.handleInput} {...props} />;
            }}
          />
          <Route exact path="/story/create" render={(props )=> {
              return <Form handlineInput={this.handleInput} {...props} />;
            }} />
          <Route
          exact
            path="/story/:id/view"
            render={props => {
              return <StoryItem {...props} />;
            }}
          />
          <Route
          exact
            path="/all_stories"
            render={props => {
              return (
                <StoriesList
                  {...props}
                  editStory={this.editStory}
                  stories={this.state.stories}
                />
              );
            }}
          />
          <Route
            exact
            path="/about"
            render={() => {
              return <About />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
