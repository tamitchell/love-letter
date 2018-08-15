const mongoose = require('./models')
const Story = mongoose.model('Story')
const storyData = require('./data.json')

Story.remove({})
    .then(()=>{
        console.log()
        Story.collection.insert(storyData)
        .then((story) => {
            console.log(story)
            process.exit()
        })
    })
    .catch((err) => {
        console.log(err)
    })