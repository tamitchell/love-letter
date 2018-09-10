const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLInputObjectType,
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

const StoryInput = new GraphQLInputObjectType({
  name: "StoryInput",
  description: "a story written by someone",
  fields: () => ({
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
  })
});


const getStories = {
  type: new GraphQLList(storyType),
  resolve(_, args) {
    return Story.find({});
  }
};

const createStory = {
  type: StoryInput,
  args: {
    // title: { type: new GraphQLNonNull(GraphQLString) },
    // tagline: { type: GraphQLString },
    // summary: { type: GraphQLString },
    // author: { type: new GraphQLNonNull(GraphQLString) },
    // rating: { type: GraphQLInt },
    // you: { type: GraphQLString },
    // need: { type: GraphQLString },
    // go: { type: GraphQLString },
    // search: { type: GraphQLString },
    // find: { type: GraphQLString },
    // take: { type: GraphQLString },
    // returned: { type: GraphQLString },
    // changed: { type: GraphQLString }
    input: {
      type: new GraphQLNonNull(StoryInput)
    }
  },
  resolve: async (_, {input}) => {
    let story = new Story({
      title: input.title,
      tagline: input.tagline,
      summary: input.summary,
      author: input.author,
      rating: input.rating,
      you: input.you,
      need: input.need,
      go: input.go,
      search: input.search,
      find: input.find,
      take: input.take,
      returned: input.returned,
      changed: input.changed
    });
    console.log(story);
    stories.save(story);
    return story(story);
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
