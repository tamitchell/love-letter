const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()


const app = express()
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.set('port', process.env.PORT || 4000)
app.use(cors(corsOptions));
app.use(parser.json())
app.use(passport.initialize())


app.use(require('./routes/index'))

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
