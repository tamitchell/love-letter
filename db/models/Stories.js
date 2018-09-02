const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Story = new Schema({
  title: String,
  tagline: String,
  summary: String,
  author: String,
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
  }
});

module.exports = mongoose.model("Story", Story);
