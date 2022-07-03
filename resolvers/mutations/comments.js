/* -------------- Create a comment to a post based on the passed ID argument -------------- */
const addCommentToPost = async (_, { id, author, body }, context) => {
  const postToCommentAt = await context.dataSources.postsDb.findPostById(id);
  postToCommentAt.comments.push({ author, body });
  await postToCommentAt.save();
  return postToCommentAt;
};

/* -------------- Update a comment's body by using the passed ID and author argument -------------- */
const updateCommentByAuthor = async (_, { id, author, body }, context) => {
  const postToCommentAt = await context.dataSources.postsDb.findPostById(id);
  const commentToUpdate = postToCommentAt.comments.find(comment => comment.author.includes(author));
  commentToUpdate.body = body;
  await postToCommentAt.save();
  return postToCommentAt;
};

/* -------------- Delete a comment by using the passed ID and author argument -------------- */
const deleteCommentByAuthor = async (_, { id, author }, context) => {
  const postToDeleteCommentFrom = await context.dataSources.postsDb.findPostById(id);
  postToDeleteCommentFrom.comments = postToDeleteCommentFrom.comments.filter(comment => !comment.author.includes(author));
  await postToDeleteCommentFrom.save();
  return postToDeleteCommentFrom;
};

module.exports = {
  addCommentToPost,
  updateCommentByAuthor,
  deleteCommentByAuthor
}
