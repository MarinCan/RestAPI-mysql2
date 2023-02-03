DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db CHARSET utf8mb4;
USE company_db;

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(50) DEFAULT NULL,
    salary INT DEFAULT NULL
);

-- DESCRIBE employee;

INSERT INTO employee VALUES 
(1, 'Santi', 1500),
(2, 'Ismael', 950),
(3, 'Andres', 1200),
(4, 'German', 1000),
(5, 'Luis', 2000)