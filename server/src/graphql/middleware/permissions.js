import { rule, shield } from 'graphql-shield';

const isAuthenticated = rule()(async (_, args, ctx) => {
  return !!ctx.user;
});

const permissions = shield({
  Query: {
    me: isAuthenticated,
  },
  Mutation: {},
});

export default permissions;
