import React, { Component } from "react";
import firebase from "../firebase.js";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      story: this.props.location.myCustomProps.story
    };
  }

  editStory = (id, data) => {
    const ref = firebase.database().ref("items");
    return ref
      .child(id)
      .update(data)
      .then(() => ref.once("value"))
      .then(snapshot => snapshot.val())
      .catch(error => ({
        errorCode: error.code,
        errorMessage: error.message
      }));
  };

  onChange = e => {
    const storyEditState = this.state.story;
    storyEditState[e.target.name] = e.target.value;
    this.setState({ stories: storyEditState });
  };

  handleDelete = e => {
    e.preventDefault();
    const itemRef = firebase
      .database()
      .ref(`/items/${this.props.match.params.id}`);
    itemRef.remove();
  };

  onSubmit = e => {
    e.preventDefault();
    this.editStory(this.props.match.params.id, this.state.story);
  };

  render() {
    return (
      <div>
        <h1>Edit</h1>
        <form onSubmit={this.onSubmit}>
          <div className="">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={this.state.story.title}
              onChange={this.onChange}
              name="title"
              placeholder="from"
            />
          </div>

          <div className="">
            <label htmlFor="you">
              Enable your Protagonist: A character is in a zone of comfort
            </label>
            <input
              type="text"
              id="you"
              value={this.state.story.you}
              onChange={this.onChange}
              name="you"
              placeholder=" A character is in a zone of comfort"
            />
          </div>

          <div className="">
            <label htmlFor="need">Something Ain't Quite Right:</label>
            <input
              type="text"
              id="need"
              value={this.state.story.need}
              onChange={this.onChange}
              name="need"
              placeholder="The character wants something"
            />
          </div>

          <div className="">
            <label htmlFor="go">Crossing the Threshold:</label>
            <input
              type="text"
              id="go"
              value={this.state.story.go}
              onChange={this.onChange}
              name="go"
              placeholder="They enter an unfamiliar situation"
            />
          </div>

          <div className="">
            <label htmlFor="search">The Road of Trials:</label>
            <input
              type="text"
              id="search"
              value={this.state.story.search}
              onChange={this.onChange}
              name="search"
              placeholder="The character adapts to the unfamiliar"
            />
          </div>

          <div className="">
            <label htmlFor="find">Meeting with the Goddess</label>
            <input
              type="text"
              id="find"
              value={this.state.story.find}
              onChange={this.onChange}
              name="find"
              placeholder="The character gets what they wanted"
            />
          </div>

          <div className="">
            <label htmlFor="take">Meet Your Maker:</label>
            <input
              type="text"
              value={this.state.story.take}
              onChange={this.onChange}
              id="take"
              name="take"
              placeholder="They pay a heavy price"
            />
          </div>

          <div className="">
            <label htmlFor="returned">Bringing It Home:</label>
            <input
              type="text"
              id="returned"
              value={this.state.story.returned}
              name="returned"
              onChange={this.onChange}
              placeholder="They return to their familiar situation"
            />
          </div>

          <div className="">
            <label htmlFor="changed">Master of Both Worlds:</label>
            <input
              type="text"
              id="changed"
              value={this.state.story.changed}
              name="changed"
              onChange={this.onChange}
              placeholder="The character has changed in someway"
            />
          </div>

          <input type="submit" value="Update Story" />
        </form>

        <form onClick={this.handleDelete}>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default Edit;
