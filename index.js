const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Post {
    title: String
    author: String
    body: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    posts: [Post]
  }
`;

const posts = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis nunc elit. Sed lacus augue, ultricies nec elementum in, luctus sed nisl. Curabitur quis felis metus. Proin augue tortor, eleifend nec urna ut, rhoncus lobortis augue. Integer auctor tincidunt ante, iaculis tincidunt lectus viverra at. Cras gravida mauris at odio elementum finibus.'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
    body: 'Fusce semper, dui et efficitur interdum, neque felis vulputate eros, ut venenatis erat ligula sit amet elit. Nunc auctor rhoncus lacus, vitae ullamcorper libero mattis sit amet. Ut tristique et ligula vel fermentum. Nulla lacinia leo et condimentum viverra. Curabitur blandit euismod vehicula. Nulla sed pharetra nisi.'
  },
];
