module.exports = `
	type Query {
		staff: [Employee]
		branches: [Branch]
		employee(id: Int): Employee
	}

	type Branch {
		id: Int
		name: String
		code: String
	}

	type Employee {
		id: Int
		firstname: String
		lastname: String
		middlename: String
	}
`;