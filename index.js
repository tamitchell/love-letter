// const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose')


// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
//   type Story {
//     id: ID!
//     title: String!
//     tagline: String
//     summary: String
//     author: String!
//     rating: String
//     you: String
//     need: String
//     go: String
//     search: String
//     find: String
//     take: String
//     returned: String
//     changed:String
//   }
//   type Mutation {
//     createStory(title: String!, author: String!): Story
//   }
// `

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
//   Mutation: {
//     createdStory: async (_, {title, author}) => {
//       const story = new Story({title, author})
//       console.log(story)
//       await story.save()
//       return story
//     }
//   }
// }

// const server = new GraphQLServer({ typeDefs, resolvers })
// mongoose.connection.once('open', () => {
//   server.start(() => console.log('Server is running on localhost:4000'))
// })

const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const data = require('./db/data')
const setupGraphQL = require('./db/graphql')


const app = express()

app.use(parser.json())
app.use(cors())
app.use(function(req, _, next) {
  req.data = data;
  return next()
})

mongoose.connect('mongodb://localhost:27017/local')
let db = mongoose.connection;
db.on('error', ()=> {console.log( '---FAILED to connect to mongoose')})
db.once('open', () => {
 console.log( '+++Connected to mongoose')
})

setupGraphQL(app)
app.listen(7000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
console.log("Running a GraphQL IDE at http://localhost:4000/graphiql");

