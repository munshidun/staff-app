module.exports = `
	type Query {
		staff: [Employee]
		employee(id: Int): Employee
	}

	type Employee {
		id: Int
		firstname: String
		lastname: String
		middlename: String
	}
`;