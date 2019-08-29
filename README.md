# staff-app
 Staff Management

# install packages
`npm install`

# run server
`node server`

open [http://localhost:4000](http://localhost:4000)

# query examples

```
query {
	employee(id: 1) {
		firstname
		lastname
	}
}
```

```
query {
	staff {
  		id
  		firstname
  		lastname
  		middlename
 	}
}
```

```
query {
	branches {
		name
		employees {
			firstname
			lastname
		}
	}
}
```

```
query {
	staff {
		firstname
		branch {
			name
		}
	}
}
```

```
query {
	employee(id: 2) {
		firstname
		branch {
			name
		}
	}
}
```

# branch mutation (add new branch)

```
mutation {
	createBranch(id: 4, name: "Silver", code: "00917") {
		id
		name
		code
	}
}
```
