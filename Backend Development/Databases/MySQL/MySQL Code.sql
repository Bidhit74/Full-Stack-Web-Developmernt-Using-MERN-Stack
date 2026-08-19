CREATE DATABASE college;
CREATE DATABASE IF NOT EXISTS instagram; -- both waya create DB but this is best way--

DROP DATABASE college;
DROP DATABASE IF EXISTS college; -- both waya Delete all data DB but this is best way --

SHOW DATABASES;  -- see db--

USE instagram; -- You can see DB tables first use DB than working the DB --
SHOW TABLES; 

CREATE TABLE user(
	Id INT PRIMARY KEY, -- Primary key only one each table --
    Age TINYINT,
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(30) UNIQUE,
    Followers INT DEFAULT 0,
    Following INT DEFAULT 0,
    CONSTRAINT CHECK (Age >= 18)
);

CREATE TABLE post(
	Id INT PRIMARY KEY,
    Content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(Id) -- Foreign key one or more tha one key is exist in single table--
);

-- Insert in DB MUltiple Data in table --
INSERT INTO user(Id, Age, Name, Email, Followers, Following)
VALUES 
(01,24, "Bidhit", "bkc123@gmail.com", 100000, 10),
(02,22, "Navnit", "nvn123@gmail.com", 10000, 30),
(03,26, "Binit", "bk123@gmail.com", 1000, 50);

INSERT INTO user(Id, Age, Name, Email) -- Default Value added --
VALUE (07,25, "Rahul", "rk123@gmail.com");

SELECT * from user; -- SHOW all table data with all column --
SELECT name, age, email from user; -- SHOW only given column show table data --

-- Whare Clause/Condition -- 
SELECT name, age from user
WHERE age >= 20;

-- Operator Use AND --
SELECT name, age from user
WHERE age >= 20 AND age <= 24;

-- Operator Use OR --
SELECT name, age from user WHERE age = 22 OR age = 24;

-- Operator Use BETWEEN --
SELECT name, age from user WHERE age BETWEEN 20 AND 25;

-- Operator Use IN --
SELECT Name, Age, Email from user 
WHERE Email IN ("bkc123@gmail.com", "bk123@gmail.com", "lks123@gmail.com");

-- Operator Use NOT --
SELECT Name, Age, Email from user 
WHERE Email NOT IN ("bkc123@gmail.com", "bk123@gmail.com", "lks123@gmail.com");

-- USE LIMIT(How may data you see) --
SELECT Name, Age, Email from user 
WHERE Age >= 20 LIMIT 3;

-- Order By Clause and Assending(ASC) or Desending(DESC) order--
SELECT Name, Age, Email from user 
ORDER BY Age DESC;

-- Aggregate Functions [COUNT(),SUM(),AVG(),MAX(),MIN()] Return Single value --
SELECT MAX(Followers) FROM user ;
SELECT MIN(Followers) FROM user ;
SELECT AVG(Followers) FROM user ;
SELECT SUM(Followers) FROM user ;

-- GROUP BY Clause: Generally we use group by with some agrregate function --
SELECT age, MAX(Followers) FROM user 
GROUP BY age;

-- HAVING Clause: WHERE is user for table, HAVING is use for GROUP BY --
-- Grouping is necessary for HAVING --
SELECT Age,MAX(Followers) FROM user 
GROUP BY age
HAVING MAX(Followers) > 1000;

-- MySQL Query — General Order -- 
-- SELECT column1, aggregate_function(column2)
-- FROM table_name --
-- WHERE condition --
-- GROUP BY column1 --
-- HAVING condition --
-- ORDER BY column1 ASC|DESC --
-- LIMIT number --

SELECT Age,MAX(Followers) 
FROM user 
WHERE (age > 18)
GROUP BY age
HAVING MAX(Followers) > 100
LIMIT 2;

-- Table Queries --
-- UPDATE Table (to update exiting rows data) with Alwasy WHERE Condition--
SET SQL_SAFE_UPDATES = 0; -- By default set = 1(true) esiliye update work nahi karta hai--
UPDATE user
SET Followers = 500
WHERE Age = 24;

-- DELETE Table (to delete exiting rows data) with Alwasy WHERE Condition --
DELETE FROM user 
WHERE Age = 27;

-- ALTER (To cahnge the schema)--
-- ADD Column --
ALTER TABLE user
ADD COLUMN Username VARCHAR(20);

-- DROP Column --
ALTER TABLE user
DROP COLUMN Username;

-- RENAME Table --
ALTER TABLE user
RENAME TO newUser;

-- Change Column(Rename) --
ALTER TABLE newUser
CHANGE COLUMN Name newName VARCHAR(20) NOT NULL;

-- Modify Column(Modify DataType/Constraint) --
ALTER TABLE newUser
MODIFY Age INT;

-- TRUNCATE (to delete table's data) --
TRUNCATE TABLE post;

SELECT * From post;