const { createPost, deletePost, updatePost } = require('./posts');
const { addCommentToPost, deleteCommentByAuthor, updateCommentByAuthor } = require('./comments');

module.exports = {
  Mutation: {
    createPost,
    deletePost,
    updatePost,
    addCommentToPost,
    deleteCommentByAuthor,
    updateCommentByAuthor
  }
}