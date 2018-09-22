import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import firebase from "../firebase.js";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import User from "./User";
import Form from "./Form";
import StoriesList from "./StoriesList";
import Navigation from "./Navigation";
import Edit from "./Edit";
import StoryItem from "./StoryShow.js";
import About from './About'
import "../sass/App.scss";
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
          author: storiesArr[item].author,
          summary: storiesArr[item].summary,
          you: storiesArr[item].you,
          need: storiesArr[item].need,
          go: storiesArr[item].go,
          search: storiesArr[item].search,
          find: storiesArr[item].find,
          take: storiesArr[item].take,
          returned: storiesArr[item].returned,
          changed: storiesArr[item].changed,
          imgpath: storiesArr[item].imgpath,
          genre: storiesArr[item].genre
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
    this.setState(userState);
  };

  handleSignUp = e => {
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
        <Navigation />
        <Switch>
          <Route exact path="/" render={Home} />
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
            path="/story/edit/:id"
            render={(props) => {
              return <Edit {...props} />;
            }}
          />
          <Route
            path="/story/create"
            component={Form}
          />
          <Route
            path="/story/:id/view"
            render={(props) => {
              return <StoryItem {...props} />;
            }}
          />
          <Route
            path="/all_stories"
            render={(props) => {
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
            render={()=> {
              return <About />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
