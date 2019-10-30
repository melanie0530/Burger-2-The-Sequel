CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;
DROP TABLE burgers;
CREATE TABLE burgers(
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(50) NULL,
    devoured BOOLEAN NOT NULL,
    createdAt VARCHAR(50) NULL,
	updatedAt VARCHAR(50) NULL,
    PRIMARY KEY(id)
);
