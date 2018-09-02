const {GraphQLObjectType, GraphQLSchema} = require('graphql')
const story = require('./types/stories')

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            getStories: story.getStories
        }
    }),
    mutation: new GraphQLObjectType ({
        name: "Mutation",
        fields: {
            create: story.createStory
            // update: Story.updateStory,
            // delete: Story.deleteStory
        }
    })
})