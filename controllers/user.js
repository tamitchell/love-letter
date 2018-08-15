const User = require("../models/User")
const passport = require ("passport")

module.exports = {
    login: (req, res) => {
        console.log(login)
    },
    createLogin: (req, res) => {
        console.log("user is in")
    },
    signup: (req, res) => {
        console.log("rendering user signup form")
    },
    createSignup: (req, res) => {
        console.log("created user and posting to database")
    },
    logout: (req, res) => {
        console.log("user logged out")
    }
}