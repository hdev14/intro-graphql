const { resolve } = require('path')
const { GraphQLServer } = require('graphql-yoga')
const mongoose = require('mongoose')
const resolvers = require('./resolvers')

mongoose.connect('mongodb://localhost:27017/graphdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const server = new GraphQLServer({
  typeDefs: resolve(__dirname, 'schema.graphql'),
  resolvers
})

server.start()
