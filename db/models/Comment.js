const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Comment = new Schema({
  name: String,
  content: String,
  created_at: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Comment", Comment);
