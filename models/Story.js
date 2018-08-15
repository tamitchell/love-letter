const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const Story = new Schema({
    title: String,
    you:String,
    need: String,
    go: String,
    search: String,
    find: String,
    take: String,
    returned: String,
    changed: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
  })


module.exports = mongoose.model("Story", Story);
