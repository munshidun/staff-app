const data = require( './data.js' );

module.exports = {
	Query: {
		staff: () => data.users,
		employee: (_,{ id }) => data.users.find( user => user.id === id )
	}
}