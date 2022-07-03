const {Query} = require('./queries');
const {Mutation} = require('./mutations/mutations');

const resolvers = {
  Query,
  Mutation
};


module.exports = resolvers;