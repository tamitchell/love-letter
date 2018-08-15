const mongoose = require('./models.js')
const Story = mongoose.model('./models.js')
const storyData = require('../db/')
Story.remove({})
    .then(()=>{
        Story.collection.insert(storyData)
        .then((story) => {
            console.log(story)
            process.exit()
        })
    })
    .catch((err) => {
        console.log(err)
    })