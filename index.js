const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolver');

/* -------------- Define the data types used throughout the server -------------- */
const typeDefs = gql`
  type Comment {
    author: String
    body: String
  }

  type Post {
    id: ID!
    title: String
    author: String
    body: String
    comments: [Comment]
  }

  type Query {
    post(id: Int!): Post
    posts: [Post]
  }

  type Mutation {
    createPost(id: Int!, title: String!, author: String!, body: String): Post
    updatePost(id: Int!, title: String, author: String, body: String): Post
    deletePost(id: Int!): [Post]
    addCommentToPost(id: Int!, author: String!, body: String!): Post
    updateCommentByAuthor(id: Int!, author: String!, body: String!): Post
    deleteCommentByAuthor(id: Int!, author: String!): Post
  }
`;


/* -------------- Configure the Apollo server -------------- */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});