const mongoose = require('./connection.js')

const Letter = new mongoose.Schema({
  from: String,
  to: String,
  message: String,
}, {
  timestamps: true
})

module.exports = mongoose.model('Letter', Letter)
