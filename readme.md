# Intro to GraphQL : Teach Yourself day


Table of Contents
---------------------

 * Introduction
 * Installation
 * Setting Up the Server
  * Defining the Schema
  * Starting the Bot with bot_start.php
 * Using the Bot
 * IRC Message Hooks
 * Other IRC Hooks
 * Design Decisions


INTRODUCTION
------------

>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.


Today, my goal is to be able to develop a basic CRUD-based backend using GraphQL with an existing MERN stack web application I developed, called Storyteller. Storyteller is a modern organizational web app that helps you organize each and every detail of your novels, poetry, and prose. It's meant to be a simple, yet powerful, application that blends visual tools so you get the right amount of help when you want it.

For more GraphQL documentation and tutorials, you can try the following:

 * [GraphQL Server Tutorial with Apollo Server and Express](https://www.robinwieruch.de/graphql-apollo-server-tutorial/)
  * [Apollo Graph QL](https://www.apollographql.com/docs/react/essentials/mutations.html)
  * **[MERN Stack Tutorial for Beginners | Build a MERN App From Scratch | Full Stack Training | Edureka
](https://www.youtube.com/watch?v=rpJO0T08Bnc&t=3007s)**
    * The best tutorial, I referenced this one heavily
* [How to GraphQL: An Introduction](https://www.howtographql.com/basics/0-introduction/)
    * Very good video developed by the creators of the query language that explains it's purpose and why it is better than what we are doing now with RESTful APIs


INSTALLATION
------------

For my personal app, I downloaded quite a few dependencies to get up and running. Let's take a look first and later quickly detail why I chose each one.

```
 "dependencies": {
    "apollo-boost": "^0.1.15",
    "body-parser": "^1.18.3",
    "cors": "^2.8.4",
    "cuid": "^2.1.3",
    "express": "^4.16.3",
    "graphql": "^0.13.2",
    "graphql-server-express": "^1.4.0",
    "graphql-tag": "^2.9.2",
    "mongoose": "^5.2.7",
    "prop-types": "^15.6.2",
    "react-apollo": "^2.1.11",
    "react-materialize": "^2.4.2",
    "react-router-dom": "^4.3.1"
  }
```

1. **apollo-boost**
    * Setting up Apollo on the client used to require quite a lot of boilerplate code, and Apollo Boost fixes that. It’s a bundled combination of apollo-client, apollo-cache-inmemory, apollo-link-error, apollo-link-http and apollo-link-state that allows for a much easier setup.

2. **cuid**
    * A **CUID (Collision Resistant Unique Identifier)** is a method of creating a unique identifier that was developed by Eric Elliott. The purpose is to create unique ID's for use in web applications to better support horizontal scaling and sequential lookup performance. 

3. **graphql**
    * This query language we will be working with
4. **graphql-server-express** 
    * Underneath all that new syntax, GraphQL is still working with ```express```. We need this dependency so that the two can play nicely.
 5. **graphql-tag**
    * GraphQL strings are the right way to write queries in your code, because they can be statically analyzed using tools like eslint-plugin-graphql. However, strings are inconvenient to manipulate, if you are trying to do things like add extra fields, merge multiple queries together, or other interesting stuff.

    * That's where this package comes in - it lets you write your queries with ES2015 template literals and compile them into an AST with the gql tag.
  6. **react-apollo** 
      * A React-specific integration for Apollo. It provides us with a lot of goodies like the Query and Mutation components.


Setting Up the Server
----------------

For now, my graphQL setup is going to look like this to begin with.
    
    ├── client/
    │── db/
    |    |──graphql/
    |    |      |──types/
    |    |           |──stories.js
    |    |      |──index.js
    |    |      |──query.js
    |    |      |──schema.js
    |    |──data.js      
    │── node_modules             
    │── index.js            


Not worrying about the client just quite yet, let's examine a few of these terms, starting with the ```index.js``` at the root of the folder.

Peeking inside, this is it's entirety:

```
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
setupGraphQL(app)
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
console.log("Running a GraphQL IDE at http://localhost:4000/graphiql");

```

At first glance, this appears strikingly similar to an express-setup.

That's because it is - with a few differences.

The first difference is the 
```const data = require('./db/data')``` 
not quite as different semantically, but because it is being used under the context of graphQL it is now acting as a wrapper of sorts to the server's data file.

I know this because of the following function: 
```
app.use(function(req, _, next) {
  req.data = data;
  return next()
})
```

Similar to how an axios or fetch request wraps the .json in a data object, so to does ```data``` perform in a similar fashion. That way, in the future when we are attempting to make a ```query```, the server responds in the following style.


![Alt text](https://1npo9l3lml0zvr6w62acc3t1-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/NASA.png "Title")

The final major difference is the ```setupGraphQL(app)``` function that is referencing the express app. This is a function that leads to the ```graphql/index.js``` file within the folder structure, which looks something like this :

```

const {graphqlExpress, graphiqlExpress} = require('graphql-server-express')
const schema = require('./schema')
const query = require('./query')

module.exports = function setupGraphQL(server) {
    server.post("/graphql", [
        graphqlExpress(request => {
            return({
                schema,
                context: request,
                formatError(error) {
                    console.log(error)
                    return {
                        message: error.message || "An unknown error occurred.",
                        locations: error.locations,
                        stack: error.stack ? error.stack.split("\n") : [],
                        path: error.path
                    }
                }
            })
        })
    ])
    server.get('/graphiql', [
        graphiqlExpress({
            query,
            schema,
            endpointURL: "/graphql"
        })
    ])
}

```

It may seem like a lot at first, but all this is saying it for **post requests**, post them on ```'/graphql'```, for **get requests**, still, get them from this exact same spot (the **endpointURL** as noted in the code) on the localhost and log errors as needed.

This is part of what GraphQL so special, no more multiple routes!


Defining the Schema
-------------

Remembering that GraphQL works with the database, rather than being one,one still needs to define a schema.

Looking at the big picture once more, the schema looks like this.

```
const {GraphQLObjectType, GraphQLSchema} = require('graphql')

const story = require('./types/stories')

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            stories: story.getStories
        }
    }),
    mutation: new GraphQLObjectType ({
        name: "Mutation",
        fields: {
            create: story.createStoryMutation
        }
    })
})
```

