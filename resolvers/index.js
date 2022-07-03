const {Query} = require('./queries');
const {Mutation} = require('./mutations/main');
const {Post} = require('./customTypes');

const resolvers = {
  Post,
  Query,
  Mutation
};


module.exports = resolvers;