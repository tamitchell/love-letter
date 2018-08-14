const Letter = require('./db/models')

module.exports = {
    index: (req, res) => {
        Letter.find({})
        .then((letter) => {
            console.log(letter)
            res.sendFile(__dirname + '/client/build/index.html')
        })
    },
    new: (req, res) => {
        res.render("/new")
        console.log("new")
    },
    create: (req, res) => {
        Letter.create({
            from: req.body.from,
            to: req.body.to,
            message: req.body.message
        }).then(letterInstance => {
            console.log(letterInstance)
            letters.push(letterInstance)
            letters.save(err => {
                res.redirect(`/`);
              });
        })
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