const {DataSource} = require('apollo-datasource');
const mongoose = require('mongoose');
const Post = require('./models');


class PostsDatabase extends DataSource {
  constructor() {
    super();
    this.connectToDb('mongodb://localhost:27017/posts');
  }

  initialize(config) {
    this.config = config.context;
  }


  getPosts() {
    return Post.find();
  }

  createPost(_id, title, author, body) {
    return Post.create({_id, title, author, body});
  }

  findPostById(_id) {
    return Post.findById(_id);
  }

  deletePostById(_id) {
    return Post.deleteOne({_id});
  }


  connectToDb(db_url) {
    return mongoose.connect(db_url);
  }
}

module.exports = PostsDatabase;