import UserService from '~/services/user.service';

const UserResolvers = {
  Query: {
    me: (_, __, { user }) => UserService.get(user.id),
  },
  Mutation: {
    login: (_, args) => UserService.login(args.input),
  },
};

export default UserResolvers;
