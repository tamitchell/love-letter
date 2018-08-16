const mongoose = require('../models/Story')
const Story = mongoose.model('Story')

module.exports = {
    index: (req, res) => {
        Story.find({})
        .then(story => 
            {console.log(story)
            res.json(story)
        })
    },
    show: (req, res) => {
        Story.findById(req.params.id)
        .then((err, story) => {
            if(err) return err
            console.log(story)
            res.json(story)
        })
    },
    create: (req, res) => {
        Story.create({
            title: req.body.title,
            // author: req.body.author,
            you: req.body.you,
            need: req.body.need,
            go: req.body.go,
            search: req.body.search,
            find: req.body.find,
            take: req.body.take,
            returned: req.body.returned,
            changed: req.body.changed,
        }).then(storyInstance => {
            console.log(storyInstance)
            stories.push(storyInstance)
            stories.save(err => {
                res.redirect(`/story`);
              });
        })
        console.log("create")
    },
    update: (req, res) => {
        Story.findByIdAndUpdate(req.params.id)
        .then((err, updated) => {
            if (err) return next(err)
            console.log("Here's the update" + updated)
            res.json(updated)
        })
        console.log("update")
    },
    delete: (req, res) => {
        Story.findByIdAndRemove(req.params.id)
        .then((err, deleted) => {
            if (err) return next(err)
            res.json(deleted)
         })
        console.log("delete")
    }
}