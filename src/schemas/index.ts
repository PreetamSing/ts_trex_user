import { gql } from 'graphql-tag';
import { mergeTypeDefs } from '@graphql-tools/merge';
import _ from 'lodash';

// If you had Query fields not associated with a
// specific type you could put them here
const Query = gql`
  type Query {
    ping: Success!
  }
  enum Success {
    SUCCESS
  }
`;

const Mutation = gql`
  type Mutation {
    ping: Success!
  }
`;

const resolver = {
  Query: {
    ping: (_parent, _args, _context, _info) => 'SUCCESS',
  },
  Mutation: {
    ping: (_parent, _args, _context, _info) => 'SUCCESS',
  },
};

export const typeDefs = mergeTypeDefs([Query, Mutation]);
export const resolvers = _.merge(resolver);
