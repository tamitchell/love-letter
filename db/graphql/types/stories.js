const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString
} = require("graphql");
const Story = require("../../models/Stories");

const storyType = new GraphQLObjectType({
  name: "Story",
  description: "a story written by someone",
  fields: {
    id: {
      description: "the id of the story",
      type: GraphQLString
    },
    rating: {
      description: "the rating of the story",
      type: GraphQLInt
    },
    title: {
      description: "the title of the story",
      type: GraphQLString
    },
    tagline: {
      description: "the tagline for the story",
      type: GraphQLString
    },
    summary: {
      description: "a quick summary of the story",
      type: GraphQLString
    },
    author: {
      description: "the author of the story",
      type: GraphQLString
    },
    you: {
      description: "describes a character is in a zone of comfort",
      type: GraphQLString
    },
    need: {
      description: "describes a character when they want something",
      type: GraphQLString
    },
    go: {
      description: "describes a character going to an unfamiliar situation",
      type: GraphQLString
    },
    search: {
      description: "describes a character adapting to the unfamiliar situation",
      type: GraphQLString
    },
    find: {
      description: "describes a character getting what they wanted",
      type: GraphQLString
    },
    take: {
      description:
        "describes a character paying a heavy price for what they wanted",
      type: GraphQLString
    },
    returned: {
      description:
        "describes a character returning to their familiar situation",
      type: GraphQLString
    },
    changed: {
      description: "describes a character with newfound changes",
      type: GraphQLString
    },
    created_at: {
      description: "the timestamp of the story",
      type: GraphQLString
    }
  }
});

const getStories = {
  type: new GraphQLList(storyType),
  resolve(_, args) {
    return Story.find({});
  }
};

const createStory = {
  type: storyType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    tagline: { type: GraphQLString },
    summary: { type: GraphQLString },
    author: { type: new GraphQLNonNull(GraphQLString) },
    rating: { type: GraphQLInt },
    you: { type: GraphQLString },
    need: { type: GraphQLString },
    go: { type: GraphQLString },
    search: { type: GraphQLString },
    find: { type: GraphQLString },
    take: { type: GraphQLString },
    returned: { type: GraphQLString },
    changed: { type: GraphQLString }
  },
  resolve(_, args) {
    let story = new Story({
      title: args.title,
      tagline: args.tagline,
      summary: args.summary,
      author: args.author,
      rating: args.rating,
      you: args.you,
      need: args.need,
      go: args.go,
      search: args.search,
      find: args.find,
      take: args.take,
      returned: args.returned,
      changed: args.changed
    });
    console.log(story);
    stories.save(story);
    return story;
  }
};

const updateStory = {
  type: storyType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLString },
    tagline: { type: GraphQLString },
    summary: { type: GraphQLString },
    author: {type: GraphQLString },
    rating: { type: GraphQLInt },
    you: { type: GraphQLString },
    need: { type: GraphQLString },
    go: { type: GraphQLString },
    search: { type: GraphQLString },
    find: { type: GraphQLString },
    take: { type: GraphQLString },
    returned: { type: GraphQLString },
    changed: { type: GraphQLString }
  },
  resolve(_, args) {
   return Story.findByIdAndUpdate(args.id, {
      $set: { ...args
      }}, {new: true})
  }
};

const deleteStory = {
    type: storyType,
    args: {id: {type: GraphQLString}},
    resolve(_, args) {
        return Story.findOneAndRemove(args.id)
    }
};

module.exports = {
  type: storyType,
  getStories,
  createStory,
  updateStory,
  deleteStory
};
