import React, { Component } from "react";
import {Toast} from 'react-materialize'
import firebase from "../firebase.js";
class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.myCustomProps,
      story: {}
    };
  }

  editStory = (id, data) => {
    const ref = firebase.database().ref("items");
    ref
    .child(this.props.match.params.id)
    .once("value")
    .then(snapshot => this.setState({story: snapshot.val()}))
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
      <div className="form-container">
      <h1>Write A Story</h1>
      <form className="form" onSubmit={this.onSubmit}>
        {/* Title Brick */}
        <div className="row header-row">
          <div className="col s12 m6 l6">
            Title:
            <p className="input-field">
              <input
                id="title"
                type="text"
                onChange={this.onChange}
                name="title"
              />
              <label htmlFor="title">Story Title</label>
            </p>
          </div>

          {/* Author Brick */}

          <div className="col s12 m6 l6">
            Author:
            <p className="input-field">
              <input
                type="text"
                id="author"
                onChange={this.onChange}
                name="author"
              />
              <label htmlFor="author">Author</label>
            </p>
          </div>

          {/* Tagline Brick */}

          <div className="col s12 m12 l12">
            <label>Genre</label>
            <select
              name="genre"
              onChange={this.onChange}
              className="browser-default"
            >
              <option value="" disabled>
                Choose your option
              </option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="anime/manga">Anime and Manga</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="scifi">Science Fiction</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>

          <div className="col s12 m12 l12">
            <div className="">
              <input name="imgpath" placeholder="url to image" onChange={this.onChange} type="text" />
              <p>
                <em>This will be used as your story's display image.</em>
              </p>
            </div>
          </div>

          <div className="col s12 m12 l12">
            <div className="radio">
              <p>
                Do you want your story to be readable upon publishing?
                <em> Note: this is set to private by default</em>
              </p>
              <label>
                <input name="group1" type="radio" value="true" />
                <span>Keep private (default)</span>
              </label>
            </div>
            <p>
              <label>
                <input name="group1" type="radio" value="false" />
                <span>Public</span>
              </label>
            </p>
          </div>
        </div>
        {/* Summary Brick */}
        <div className="row">
          <div className="col s12 l12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Summary
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  This will be the first thing people read, before your story.
                  Be descriptive!
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="summary"
                maxLength={300}
                onChange={this.onChange}
                name="summary"
              />
              <label htmlFor="title">Summary</label>
            </p>
          </div>
        </div>
        {/* You Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Establish a Protagonist
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  How do you put the audience into a character? Easy. Show
                  one. You'd have to go out of your way to keep the audience
                  from imprinting on them. It could be a raccoon, a homeless
                  man or the President. Just fade in on them and we are them
                  until we have a better choice.
                </p>
                <p>
                  If there are choices, the audience picks someone to whom
                  they relate. When in doubt, they follow their pity. Fade in
                  on a raccoon being chased by a bear, we are the raccoon.
                  Fade in on a room full of ambassadors. The President walks
                  in and trips on the carpet. We are the President. When you
                  feel sorry for someone, you're using the same part of your
                  brain you use to identify with them.
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="you"
                onChange={this.onChange}
                name="you"
              />
              <label htmlFor="you">
                Enable your Protagonist: A character is in a zone of comfort
              </label>
            </p>
          </div>
        </div>
        {/* Need Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Somethin' Aint Quite Right
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Somethin' Aint Quite Right
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  This is where we demonstrate that something is off balance
                  in the universe, no matter how large or small that universe
                  is. If this is a story about a war between Earth and Mars,
                  this is a good time to show those Martian ships heading
                  toward our peaceful planet. On the other hand, if this is a
                  romantic comedy, maybe our heroine is at dinner, on a bad
                  blind date.
                </p>
                <p>
                  {" "}
                  We're being presented with the idea that things aren't
                  perfect. They could be better. This is where a character
                  might wonder out loud, or with facial expressions, why he
                  can't be cooler, or richer, or faster, or a better lover.
                  This wish will be granted in ways that character couldn't
                  have expected.
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="need"
                onChange={this.onChange}
                name="need"
              />
              <label htmlFor="need">The character wants something</label>
            </p>
          </div>
        </div>
        {/* Go Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card  orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Crossing the Threshold
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Crossing the Threshold
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  What's your story about? If it's about a woman running from
                  a killer cyborg, then up until now, she has not been running
                  from a killer cyborg. Now she's gonna start. If your story
                  is about an infatuation, this might be the point where our
                  male hero first lays eyes on the object of his desire. Then
                  again, if our protagonist is the object of a dangerous
                  obsession, the infatuation could have been step 2 and this
                  could be the point where the guy says something really,
                  really creepy to her in the office hall.
                </p>
                <p>
                  It doesn't matter how small or large the scope of your story
                  is, what matters is the amount of contrast between these
                  worlds. In our story about the man changing his tire in the
                  rain, up until now, he wasn't changing a tire. He was inside
                  a dry car. Now, he opens his car door and steps into the
                  pouring rain. The adventure, regardless of its size or
                  subtlety, has begun.
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="go"
                onChange={this.onChange}
                name="go"
              />
              <label htmlFor="go">They enter an unfamiliar situation</label>
            </p>
          </div>
        </div>
        {/* Search Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  The Road of Trials
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  The Road of Trials
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Christopher Vogler calls this phase of a feature script
                  "friends, enemies and allies." Hack producers call it the
                  "training phase." I prefer to stick with Joseph Campbell's
                  title, "The Road of Trials," because it's less specific.
                  I've seen too many movies where our time is wasted watching
                  a hero literally "train" in a forest clearing because
                  someone got the idea it was a necessary ingredient. The
                  point of this part of the circle is, our protagonist has
                  been thrown into the water and now it's sink or swim.
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="search"
                onChange={this.onChange}
                name="search"
              />
              <label htmlFor="search">
                The character adapts to the unfamiliar
              </label>
            </p>
          </div>
        </div>
        {/* Find Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Meeting the Goddess
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Meeting the Goddess
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  The road of trial's job is to prepare your protagonist for
                  this meeting. Like a single sperm cell arriving at the egg,
                  your hero-in-the-making just found what they were looking
                  for, even if it's not quite what they knew they were looking
                  for.
                </p>
                <p>
                  {" "}
                  I'm using the phrase "meeting with the goddess" because
                  Joseph Campbell thought about these things longer and harder
                  than me. Syd Field calls this "the mid point." Catchy.
                  Robert McKee probably calls it "the nexus of inclination" or
                  something. Unless I'm mistaken, African Americans call it
                  Kwanza.{" "}
                </p>
                <p>
                  Whatever you call it, this is a very, very special pivot
                  point. If you look at the circle, you see I've placed the
                  goddess at the very bottom, right in the center. Imagine
                  your protagonist began at the top and has tumbled all the
                  way down here. This is where the universe's natural tendency
                  to pull your protagonist downward has done its job, and for
                  X amount of time, we experience weightlessness. Anything
                  goes down here. This is a time for major revelations, and
                  total vulnerability. If you're writing a plot-twisty
                  thriller, twist here and twist hard.
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="find"
                onChange={this.onChange}
                name="find"
              />
              <label htmlFor="find">
                The character gets what they wanted
              </label>
            </p>
          </div>
        </div>
        {/* Take Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Meet Your Maker
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Meet Your Maker
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  As you might expect with a circular model like this, there
                  is a lot of symmetry going on, and on the journey back
                  upward, we're going to be doing a lot of referencing to the
                  journey downward.
                </p>
              </div>
            </div>
            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                onChange={this.onChange}
                id="take"
                name="take"
              />
              <label htmlFor="take">They pay a heavy price</label>
            </p>
          </div>
        </div>
        {/* Return Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Bringing It Home
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Bringing It Home
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  For some characters, this is as easy as hugging the
                  scarecrow goodbye and waking up. For others, this is where
                  the extraction team finally shows up and pulls them out-
                  what Campbell calls "Rescue from Without." In an anecdote
                  about having to change a flat tire in the rain, this could
                  be the character getting back into his car.
                </p>
                <p>
                  {" "}
                  For others, not so easy, which is why Campbell also talks
                  about "The Magic Flight."
                </p>
              </div>
            </div>

            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="returned"
                name="returned"
                onChange={this.onChange}
              />
              <label htmlFor="returned">
                They return to their familiar situation
              </label>
            </p>
          </div>
        </div>
        {/* Change Brick */}
        <div className="row">
          <div className="col s12">
            <div className="card orange accent-3 col s12 m5 l5">
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Master of Both Worlds
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              <div className="card-reveal orange accent-3">
                <span className="card-title grey-text text-darken-4">
                  Master of Both Worlds
                  <i className="material-icons right">close</i>
                </span>
                <p>
                  Everyone thinks the Matrix was successful because of new,
                  American special effects combined with old Hong Kong bootleg
                  style. Those things didn't hurt, but for an example of how
                  well they deliver on their own, watch the fucking sequel.
                  Admit it, it stinks. The writers of the Matrix say in
                  interviews that they assembled The Matrix from elements of
                  their favorite films.
                </p>
                <p>
                  {" "}
                  They tried to make the movie that they always wanted to see.
                  Ta da. They surrendered to their instincts, to what they
                  knew worked, and as a result, they did what humans do
                  instinctively: They told an instinctively satisfying story
                  about an everyday guy (1) that gets a weird call (2) and,
                  upon following it, realizes that reality was an illusion
                  (3). He learns the ropes (4), talks to the oracle (5), loses
                  his mentor (6), goes back (7) and saves the fucking day (8).
                  It's not perfect, especially in the third act, but try
                  identifying the steps in Matrix Reloaded. Get a slide rule.
                  And a cup of coffee. It's going to be a long, hard slog.
                </p>
              </div>
            </div>
            <p className="input-field col s12 m7 l7">
              <textarea
                type="text"
                id="changed"
                name="changed"
                onChange={this.onChange}
              />
              <label htmlFor="returned">
                The character has changed in someway{" "}
              </label>
            </p>
          </div>
        </div>
          <Toast type="submit" toast="STORY UPDATED!">UPDATE</Toast>
      </form>
    </div>
    );
  }
}

export default Edit;
