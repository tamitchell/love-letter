const mongoose = require('mongoose')


// if (process.env.NODE_ENV == "production") {
//     mongoose.connect(process.env.MLAB_URL)
// } else {
//     mongoose.connect("mongodb://localhost/storyteller");
// }

mongoose.connect("mongodb://localhost/storyteller")
.then(connection => console.log('Connection established!'))
.catch(err => console.log('Connection failed!', err))


mongoose.Promise = Promise

module.exports = mongoose
