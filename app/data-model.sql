CREATE TABLE branches (
	id bigserial PRIMARY KEY,
	name varchar(128) NOT NULL,
	code varchar(5)
);

CREATE TABLE employees (

	id bigserial PRIMARY KEY,
	firstname varchar(32) NOT NULL,
	lastname varchar(32) NOT NULL,
	middlename varchar(32),
	branch integer REFERENCES branches(id)
);

-- insertions

INSERT INTO branches (name,code) VALUES ('RED', '10001'), ('GREEN', '10002'), ('BLUE', '10003');

INSERT INTO employees (firstname,lastname,branch) VALUES ('Muhammad', 'Najimov', 1), ('Catarina','Vivian',3);