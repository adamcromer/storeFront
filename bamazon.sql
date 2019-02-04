DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(35) NOT NULL,
    author VARCHAR(25) NOT  NULL,
    department VARCHAR(35) NOT NULL,
    price FLOAT(10) NOT NULL,
    quantity FLOAT(10),
    PRIMARY KEY (id)
);

