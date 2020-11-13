CREATE DATABASE firstapi;

CREATE TABLE users (
    id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL
);

INSERT INTO users(username, email) VALUES
('freddy', 'fmarcosdev@gmail.com'),
('rayan', 'rayan@faztweb.com')

