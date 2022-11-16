CREATE TABLE todo_schema.todo (
	todo_id serial PRIMARY KEY,
	titre VARCHAR ( 50 ) UNIQUE NOT NULL,
	current_statut statut ,
	date DATE NOT NULL DEFAULT CURRENT_DATE,
	description VARCHAR (255)
);


