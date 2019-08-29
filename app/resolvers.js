const data = require( './data.js' );

module.exports = {
	Query: {
		staff: () => data.users,
		branches: () => data.branches,
		employee: (_,{ id }) => data.users.find( user => user.id === id ),
	},

	Branch: {
		employees: ( branch ) => data.users.filter( user => user.branch === branch.id ),
	},

	Employee: {
		branch: ( employee ) => data.branches.find( branch => branch.id === employee.branch ),
	}
}