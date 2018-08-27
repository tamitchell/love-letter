const {GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLString} = require('graphql')
const cuid = require('cuid')

const storyType = new GraphQLObjectType ({
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
            description: "describes a character paying a heavy price for what they wanted",
            type: GraphQLString
        },
        returned: {
            description: "describes a character returning to their familiar situation",
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
})

const getStories = {
    type: new GraphQLList (storyType),
    resolve (_, args, ctx) {
        return ctx.data.stories
    }
}

const createStoryMutation = {
    type: storyType,
    args: {
        title: {type: new GraphQLNonNull(GraphQLString)},
        tagline: {type: GraphQLString},
        summary: {type: GraphQLString},
        author: {type: new GraphQLNonNull(GraphQLString)},
        rating: {type: GraphQLInt},
        you: {type: GraphQLString},
        need: {type: GraphQLString},
        go: {type: GraphQLString},
        search: {type: GraphQLString},
        find: {type: GraphQLString},
        take: {type: GraphQLString},
        returned: {type: GraphQLString},
        changed:{type: GraphQLString},
    },
    resolve (_, args, ctx) {
        const story = {
            id: cuid(),
            created_at: new Date(),
            ...args
        }
        console.log(story)
        ctx.data.stories.unshift(story)
        story.save()
        return story
    }
}

// const updateStory = {
//   console.log('update story')
// }

// const deleteStory ={
//     console.log("Story deleted")
// }

module.exports = {
    type: storyType,
    getStories,
    createStoryMutation
    // updateStory,
    // deleteStory
}