const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const Story = new Schema({
    title: String,
    author: String,
    you:String,
    need: String,
    go: String,
    search: String,
    find: String,
    take: String,
    return: String,
    changed: String,
  })


module.exports = mongoose.model("Story", Story);
