const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new mongoose.Schema({
  username: String,
  password: String,
  stories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Story"
    }
  ]
});

module.exports = mongoose.model("User", User);
