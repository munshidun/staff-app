const pg = require('pg-promise')();
const db = pg('postgres://postgres:postgres@localhost:5432/staffapp');

module.exports = {

	Mutation: {
		async createBranch(_, { name, code }) {
			
			try {

				const branch = await db.one('INSERT INTO branches(name, code) VALUES($1, $2) RETURNING id', [name, code]);

				console.log( typeof branch.id );

				return {id: branch.id, name, code};
			}
			catch(error) {
				console.error(error);
			}
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