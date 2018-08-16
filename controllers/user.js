const User = require("../models/User")
const jwt = require('jwt-simple')
const passport = require ("../config/passport")
const config = require('../config/config')

module.exports = {
    login: (req, res) => {
        console.log("Loggin In..")
        if (req.body.email && req.body.password) {
            User.findOne({ email: req.body.email }).then(user => {
              if (user) {
                if (user.password === req.body.password) {
                  var payload = {
                    id: user.id
                  }
                  var token = jwt.encode(payload, config.jwtSecret)
                  res.json({
                    token: token
                  })
                } else {
                  res.sendStatus(401)
                }
              } else {
                res.sendStatus(401)
              }
            })
          } else {
            res.sendStatus(401)
          }
    },
    signup: (req, res) => {
        console.log("rendering user signup form")
        if (req.body.email && req.body.password) {
            let newUser = {
              email: req.body.email,
              password: req.body.password
            }
            User.findOne({ email: req.body.email })
              .then((user) => {
                if (!user) {
                  User.create(newUser)
                    .then(user => {
                      if (user) {
                        var payload = {
                          id: newUser.id
                        }
                        var token = jwt.encode(payload, config.jwtSecret)
                        res.json({
                          token: token
                        })
                      } else {
                        res.sendStatus(401)
                      }
                    })
                } else {
                  res.sendStatus(401)
                }
              })
          } else {
            res.sendStatus(401)
          }
    }
}