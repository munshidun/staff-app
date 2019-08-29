const data = require( './data.js' );

module.exports = {

	Mutation: {
		createBranch(_, { id, name, code }) {
			const branch = { id, name, code };
			data.branches.push( branch );
			return branch;
		}
	},

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