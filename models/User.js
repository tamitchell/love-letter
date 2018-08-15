const mongoose = require('../db/connection')
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    local:
    {email: String,
    password: String
    },
    stories:  [{
        type: Schema.Types.ObjectId,
        ref: "Story"
      }]
})

mongoose.model('User', UserSchema)

module.exports = mongoose