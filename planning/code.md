This app is called StoryTeller. Storyteller is a modern organizational web app that helps you organize each and every detail of your novels, poetry, and prose. It's meant to be a simple, yet powerful, application that blends visual tools so you get the right amount of help when you want it.

The finished app will have two models - Stories and Comments.

User will be able to create, edit and delete stories, but will only be able to create and delete stories.

There will be no authentication implemented for the duration of this project.

Model for Story is based off of Dan Harmon's 'The Story Embryo' that provides a step by step guide on how to write a story. Code base model is as follows:

#### Story Model

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Story = new Schema({
  title: String,
  tagline: String,
  summary: String,
  author: String,
  rating: Number,
  you: String,
  need: String,
  go: String,
  search: String,
  find: String,
  take: String,
  returned: String,
  changed: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Story", Story);
```

#### Comment Model

```
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  name: String,
  content: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Comment", Comment);
```

The data will be stored and handled by MondoDB, however,
the manipulation of this data will be handled through a combination of GraphQL and Mongoose. GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools. 

If you are unfamiliar with GraphQL, learn more about it [here](https://www.robinwieruch.de/graphql-apollo-server-tutorial/). I also have fully detailed readme that states how I went about building my GraphQL server at the root of this repository.

The client-side of the application will be using React.js and GraphQL once again for querying.