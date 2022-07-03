const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: String,
  body: String
});




module.exports = mongoose.model('Comment', commentSchema);