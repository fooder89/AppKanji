module.exports.dbSchema = `CREATE TABLE IF NOT EXISTS usuarios (
		id integer NOT NULL PRIMARY KEY,
		nombre text NOT NULL UNIQUE,
		password text NOT NULL,
		nivel integer NOT NULL,
		experiencia integer NOT NULL
		);`
