CREATE DATABASE quiz_users;
CREATE extension if not exists "uuid-ossp";

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password) VALUES ('User1','user1@gmail.com','12345678');

CREATE TABLE questionSet_1(
    q_id SERIAL PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    subject VARCHAR(30) NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    correct_answer INTEGER(1) NOT NULL,
);

INSERT INTO questionSet_1 (question,subject,option1,option2,option3,option4,correct_answer) VALUES ('Question1','CSE','o1','o2','o3','o4',2);