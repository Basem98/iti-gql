let { posts } = require('./dataset');

const resolvers = {
  Query: {
    post: (_, { id }) => posts.find(post => post.id == id),
    posts: () => posts,
  },
  Mutation: {
    /* -------------- Create a new post -------------- */
    createPost: (_, { id, title, author, body }) => {
      const newPost = { id, title, author, body };
      posts.push(newPost)
      return newPost;
    },
    /* -------------- Update a post based on the passed argument -------------- */
    updatePost: (_, { id, title, author, body }) => {
      const postToUpdate = posts.find(post => post.id = id);
      if (title) postToUpdate.title = title;
      if (author) postToUpdate.author = author;
      if (body) postToUpdate.body = body;
      return postToUpdate;
    },
    /* -------------- Delete a post based on the passed ID argument -------------- */
    deletePost: (_, { id }) => {
      posts = posts.filter(post => post.id != id);
      return posts;
    },
    /* -------------- Create a comment to a post based on the passed ID argument -------------- */
    addCommentToPost: (_, { id, author, body }) => {
      const postToCommentAt = posts.find(post => post.id = id);
      postToCommentAt.comments.push({ author, body });
      return postToCommentAt;
    },
    /* -------------- Update a comment's body by using the passed ID and author argument -------------- */
    updateCommentByAuthor: (_, { id, author, body }) => {
      const postToCommentAt = posts.find(post => post.id = id);
      const commentToUpdate = postToCommentAt.comments.find(comment => comment.author.includes(author));
      commentToUpdate.body = body;
      return postToCommentAt;
    },
    /* -------------- Delete a comment by using the passed ID and author argument -------------- */
    deleteCommentByAuthor: (_, {id, author}) => {
      const postToDeleteCommentFrom = posts.find(post => post.id = id);
      postToDeleteCommentFrom.comments = postToDeleteCommentFrom.comments.filter(comment => !comment.author.includes(author));
      return postToDeleteCommentFrom;
    }
  }
};


module.exports = resolvers;