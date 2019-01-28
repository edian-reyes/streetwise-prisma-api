require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const { GraphQLServer } = require("graphql-yoga");
const { Prisma } = require("prisma-binding");
const Query = require("./resolvers/Query");

const app = express();

app.use(bodyParser.json());

const resolvers = {
  Query
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: "./src/generated/prisma.graphql",
      endpoint: process.env.PRISMA_ENDPOINT,
      secret: process.env.PRISMA_SECRET,
      debug: false
    })
  })
});

server.start(url => console.log(`Listening to http://localhost:${url.port}`));
