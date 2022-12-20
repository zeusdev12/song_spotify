import './utils/env';
import { GraphQLServer } from 'graphql-yoga';
import graphqlOptions from './graphql/index';

const { PORT = 4000 } = process.env;
const server = new GraphQLServer({
  ...graphqlOptions,
});

server
  .start({
    port: PORT,
    endpoint: '/api',
    playground: '/graphql',
    subscriptions: '/sub',
    cors: true,
  })
  .then(() => console.log(`Server is running on http://localhost:${PORT}`))
  .catch(e => console.error(e));
