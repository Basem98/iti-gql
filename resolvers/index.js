const {Query} = require('./queries');
const {Mutation} = require('./mutations/main');

const resolvers = {
  Query,
  Mutation
};


module.exports = resolvers;