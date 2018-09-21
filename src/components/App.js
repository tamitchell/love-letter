import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from '../firebase.js';
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import User from "./User";
import Form from "./Form";
import StoriesList from "./StoriesList";
import Navigation from "./Navigation";
import Edit from "./Edit";
import StoryItem from "./StoryShow.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      stories: [],
      isLoggedIn: false
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
          title: storiesArr[item].title,
          tagline: storiesArr[item].tagline,
          summary: storiesArr[item].summary,
          you: storiesArr[item].you,
          need: storiesArr[item].need,
          go: storiesArr[item].go,
          search: storiesArr[item].search,
          find: storiesArr[item].find,
          take: storiesArr[item].take,
          returned: storiesArr[item].returned,
          changed: storiesArr[item].changed
        });
      }
      this.setState({
        stories: fetchedStories
      });
    });
  }

  handleInput = e => {
    const userState = this.state;
    userState[e.target.name] = e.target.value;
    console.log(userState);
    this.setState(userState);
  };

  handleSignUp = e => {
    console.log(this.state);
    e.preventDefault();
    // axios
    //   .post(signupURL, {
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(response => {
    //     localStorage.token = response.data.token;
    //     // this.props.history.push("/profile");
    //   })
    //   .catch(err => console.log(err));
  };

  handleLogIn(e) {
    e.preventDefault();
    // axios
    //   .post(loginURL, {
    //     username: this.state.username,
    //     password: this.state.password
    //   })
    //   .then(res => {
    //     localStorage.token = res.data.token;
    //     this.setState({ isLoggedIn: true });
    //   })
    //   .catch(err => console.log(err));
  }

  handleLogOut() {
    this.setState({
      username: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  render() {
    return (
      <div>
        <Navigation isLoggedIn={this.state.isLoggedIn} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/signup"
            render={() => {
              return (
                <Signup
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                />
              );
            }}
          />
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
            render={(props) => {
              return <Edit {...props}/>;
            }}
          />
          <Route
            exact
            path="/story/create"
            render={() => {
              return <Form />;
            }}
          />
          <Route
            exact
            path="/story/:id/view"
            render={(props) => {
              return <StoryItem {...props}/>;
            }}
          />
          <Route
            exact
            path="/all_stories"
            render={props => {
              return <StoriesList editStory={this.editStory} stories={this.state.stories} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
