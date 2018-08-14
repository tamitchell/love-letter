const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/models')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())

app.use(require('./routes'))

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
