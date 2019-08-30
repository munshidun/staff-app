const data = require( './data.js' );
const pg = require('pg-promise')();
const db = pg('postgres://postgres:postgres@localhost:5432/staffapp');

module.exports = {

	Mutation: {
		createBranch(_, { id, name, code }) {
			const branch = { id, name, code };
			data.branches.push( branch );
			return branch;
		}
	},

	Query: {
		staff: async () => await db.any('SELECT * FROM employees'),
		branches: async () => await db.any('SELECT * FROM branches'),
		employee: async (_,{ id }) => await db.one('SELECT * FROM employees WHERE id = $1', [id]),
	},

	Branch: {
		employees: async ( branch ) => await db.any('SELECT * FROM employees WHERE branch = $1', [branch.id]),
	},

	Employee: {
		branch: async ( employee ) => await db.one('SELECT * FROM branches WHERE id = $1', [employee.branch]),
	}
}