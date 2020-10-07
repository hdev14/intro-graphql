const users = [
    { id: 1, name: 'Hermerson', email: 'ne.hermerson@gmail.com'},
    { id: 2, name: 'Maria', email: 'maria@email.com'},
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0]
    },

    Mutation: {
        createUser: () => users[0]
    }
}