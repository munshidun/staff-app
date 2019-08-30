module.exports = `

	type Mutation {
		createBranch(name: String, code: String): Branch
	}

	type Query {
		staff: [Employee]
		branches: [Branch]
		employee(id: Int): Employee
	}

	type Branch {
		id: String
		name: String
		code: String
		employees: [Employee]
	}

	type Employee {
		id: String
		firstname: String
		lastname: String
		middlename: String,
		branch: Branch
	}
`;