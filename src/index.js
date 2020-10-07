const { resolve } = require('path')
const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./resolvers')

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()
