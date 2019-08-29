module.exports = `

	type Mutation {
		createBranch(id: Int, name: String, code: String): Branch
	}

	type Query {
		staff: [Employee]
		branches: [Branch]
		employee(id: Int): Employee
	}

	type Branch {
		id: Int
		name: String
		code: String
		employees: [Employee]
	}

	type Employee {
		id: Int
		firstname: String
		lastname: String
		middlename: String,
		branch: Branch
	}
`;