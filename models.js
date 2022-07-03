const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
  _id: {type: Number, required: true},
  title: String,
  author: String,
  body: String,
  comments: [{
    author: String,
    body: String
  }]
}, {_id: false});




module.exports = mongoose.model('Post', postSchema);