const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Story = new Schema({
  title: String,
  tagline: String,
  summary: String,
  rating: Number,
  you: String,
  need: String,
  go: String,
  search: String,
  find: String,
  take: String,
  returned: String,
  changed: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Story", Story);
