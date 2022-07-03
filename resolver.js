const { posts } = require('./dataset');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    posts: () => posts,
  },
  Mutation: {
    createPost: (_, {id, title, author, body}) => {
      const newPost = { id, title, author, body };
      posts.push(newPost)
      return newPost;
    },
    updatePost: () => { },
    deletePost: () => { }
  }
};


module.exports = resolvers;