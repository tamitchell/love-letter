const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({

})

module.exports = mongoose.model("Comment", Comment)