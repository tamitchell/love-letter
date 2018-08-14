const Letter = require('./db/models')

module.exports = {
    index: (req, res) => {
        Letter.find({})
        .then((letter) => {
            console.log(letter)
        })
    },
    new: (req, res) => {
        //
        console.log("new")
    },
    create: (req, res) => {
        // Letter.create({
        //     from: req.body.from,
        //     to: req.body.to,
        //     message: req.body.message
        // }).then(letterInstance => {
        //     console.log(letterInstance)
        //     L
        // })
        console.log("create")
    },
    update: (req, res) => {
        //
        console.log("update")
    },
    delete: (req, res) => {
        console.log("delete")
    }
}