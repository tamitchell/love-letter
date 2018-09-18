const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Story = new Schema({
  title: {
    type: String,
    required: true
  },
  tagline: String,
  summary: String,
  author: {
    type: String,
    requried: true },
  rating: Number,
  you: String,
  need: String,
  go: String,
  search: String,
  find: String,
  take: String,
  returned: String,
  changed: String,
  comments: [
    {
      types: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Story", Story);
