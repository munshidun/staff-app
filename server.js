const { ApolloServer } = require('apollo-server');
const schema = require('./app/schema');
const resolvers = require('./app/resolvers');

const server = new ApolloServer({
	typeDefs: schema,
	resolvers: resolvers,
});

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));