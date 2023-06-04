// Modules imported
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import morgan from 'morgan';
import resolvers from '../server/graphql/resolvers/index.js';
import typeDefs from '../server/graphql/typeDefs/index.js';
import dotenv from 'dotenv'
// require and configure dotenv, will load vars in .env in PROCESS.ENV
dotenv.config()

const port = process.env.PORT || 4000

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Create Express app
const app = express();

// Add middleware
app.use(morgan('dev'));

(async () => {
  // Start the Apollo Server
  await server.start();

  // Apply middleware
  server.applyMiddleware({ app });

  app.listen({ port: port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
})();

export default app;