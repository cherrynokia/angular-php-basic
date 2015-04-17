CREATE DATABASE school;
USE school;
CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  age INT,
  comment TEXT
);
