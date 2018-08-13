const mongoose = require('./models')
const Letter = mongoose.model('Letter')
const letterData = require('./love-letter.json')

Letter.remove({})
    .then(()=>{
        Letter.collection.insert(letterData)
        .then((loveLetter) => {
            console.log(loveLetter)
            process.exit()
        })
    })
    .catch((err) => {
        console.log(err)
    })