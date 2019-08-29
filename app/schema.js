module.exports = `
	type Query {
		staff: [Employee]
	}

	type Employee {
		id: Int
		firstname: String
		lastname: String
		middlename: String
	}
`;