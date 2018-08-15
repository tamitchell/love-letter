const Story = require('./db/models')
module.exports = {
    index: (req, res) => {
        Story.find()
        .populate()
        .then((result) => {
            res.send(result)      
        })
    },
    new: (req, res) => {
        // res.render("/new")
        console.log("new")
    },
    create: (req, res) => {
        Story.create({
            title: req.body.title,
            author: req.body.author,
            you: req.body.you,
            need: req.body.need,
            go: req.body.go,
            search: req.body.search,
            find: req.body.find,
            take: req.body.take,
            return: req.body.return,
            changed: req.body.changed,
        }).then(storyInstance => {
            console.log(storyInstance)
            letters.push(storyInstance)
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