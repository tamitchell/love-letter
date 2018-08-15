const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()


const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())
app.use(passport.initialize())


app.use(require('./routes'))

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
