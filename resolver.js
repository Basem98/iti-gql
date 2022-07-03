let { posts } = require('./dataset');

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
    updatePost: (_, {id, title, author, body}) => {
      const postToUpdate = posts.find(post => post.id = id);
      if (title) postToUpdate.title = title;
      if (author) postToUpdate.author = author;
      if (body) postToUpdate.body = body;
      return postToUpdate;
    },
    deletePost: (_, {id}) => {
      posts = posts.filter(post => post.id != id);
      return posts;
    }
  }
};


module.exports = resolvers;