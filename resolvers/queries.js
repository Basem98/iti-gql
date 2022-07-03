module.exports = {
  Query: {
    post: async (_, { id }, context) => await context.dataSources.postsDb.findPostById(id),
    posts: async (_, args, context) => {
      return await context.dataSources.postsDb.getPosts();
    },
  }
}