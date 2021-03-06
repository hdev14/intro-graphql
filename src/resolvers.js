const User = require('./models/User')

module.exports = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id)
  },

  Mutation: {
    createUser: (_, { name, email }) => User.create({ name, email }),
    updateUser: (_, { id, name, email }) => {
      return User.findByIdAndUpdate(id, { name, email })
    },
    deleteUser: (_, { id }) => {
      return User.findByIdAndDelete(id)
    }
  }
}
