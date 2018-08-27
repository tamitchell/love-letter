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
app.listen(4000)
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
console.log("Running a GraphQL IDE at http://localhost:4000/graphiql");

