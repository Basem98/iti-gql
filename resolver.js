// let { posts } = require('./dataset');

const resolvers = {
  Query: {
    post: async (_, { id }, context) => await context.dataSources.postsDb.findPostById(id),
    posts: async (_, args, context) => {
      return await context.dataSources.postsDb.getPosts();
    },
  },
  Mutation: {
    /* -------------- Create a new post -------------- */
    createPost: async (_, { id, title, author, body }, context) => {
      const createdPost = await context.dataSources.postsDb.createPost(id, title, author, body);
      return createdPost;
    },
    /* -------------- Update a post based on the passed argument -------------- */
    updatePost: async (_, { id, title, author, body }, context) => {
      const postToUpdate = await context.dataSources.postsDb.findPostById(id);
      if (title) postToUpdate.title = title;
      if (author) postToUpdate.author = author;
      if (body) postToUpdate.body = body;
      await postToUpdate.save();
      return postToUpdate;
    },
    /* -------------- Delete a post based on the passed ID argument -------------- */
    deletePost: async (_, { id }, context) => {
      await context.dataSources.postsDb.deletePostById(id);
      return await context.dataSources.postsDb.getPosts();
    },
    /* -------------- Create a comment to a post based on the passed ID argument -------------- */
    addCommentToPost: async (_, { id, author, body }, context) => {
      const postToCommentAt = await context.dataSources.postsDb.findPostById(id);
      postToCommentAt.comments.push({ author, body });
      await postToCommentAt.save();
      return postToCommentAt;
    },
    /* -------------- Update a comment's body by using the passed ID and author argument -------------- */
    updateCommentByAuthor: async (_, { id, author, body }, context) => {
      const postToCommentAt = await context.dataSources.postsDb.findPostById(id);
      const commentToUpdate = postToCommentAt.comments.find(comment => comment.author.includes(author));
      commentToUpdate.body = body;
      await postToCommentAt.save();
      return postToCommentAt;
    },
    /* -------------- Delete a comment by using the passed ID and author argument -------------- */
    deleteCommentByAuthor: async (_, {id, author}, context) => {
      const postToDeleteCommentFrom = await context.dataSources.postsDb.findPostById(id);
      postToDeleteCommentFrom.comments = postToDeleteCommentFrom.comments.filter(comment => !comment.author.includes(author));
      await postToDeleteCommentFrom.save();
      return postToDeleteCommentFrom;
    }
  }
};


module.exports = resolvers;