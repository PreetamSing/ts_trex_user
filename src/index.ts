// config.ts
import dotenv from 'dotenv';
dotenv.config();

// Load Path Alias For Transpiled Code [Sync]
import path from 'path';
if (path.extname(__filename) === '.js') {
  require('module-alias/register');
}

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';

import { typeDefs, resolvers } from '@schemas/index';
import bootstrap from '@core/bootstrap';
import { App, Logger } from '@core/globals';

async function startApolloServer() {
  // Bootstrap app before starting.
  await bootstrap();
  // Build and start subgraph server.
  const server = new ApolloServer({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers,
      },
    ]),
  });
  const { url } = await startStandaloneServer(server, {
    listen: { port: App.Config.PORT },
  });
  Logger.info(`🚀 Server ready at: ${url}`);
}

startApolloServer().catch((error) => {
  Logger.error('Failed to start server', error);
});
