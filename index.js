const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers/index.js');
const PostsDatabase = require('./datasources/blog');
const config = require('./config/envConfig');
const fs = require('fs');
const path = require('path');
const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), 'utf-8'));


/* -------------- Configure the Apollo server -------------- */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({postsDb: new PostsDatabase(config.DB.URL)}),
  csrfPrevention: true,
  cache: 'bounded',
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});