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
          <Route exact path="/" component={Home} />
          <Route
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
            path="/user/:id/profile"
            render={() => {
              return <User />;
            }}
          />
          <Route
            path="/story/edit/:id"
            render={(props )=> {
              return <Edit handlineInput={this.handleInput} {...props} />;
            }}
          />
          <Route path="/story/create" render={(props )=> {
              return <Form handlineInput={this.handleInput} {...props} />;
            }} />
          <Route
            path="/story/:id/view"
            render={props => {
              return <StoryItem {...props} />;
            }}
          />
          <Route
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
