CREATE DATABASE IF NOT EXISTS College;
Use College;

CREATE TABLE Teacher(
	Id INT PRIMARY KEY,
    Name VARCHAR(20) NOT NULL,
    Subject VARCHAR(20) NOT NULL,
    Salary INT
);

INSERT INTO Teacher (Id, Name, Subject, Salary)
VALUES
(23, "Ajay", "Math", 75000),
(47, "Bharat", "Chemistry", 60000),
(18, "Chetan", "Physics", 55000),
(9, "Divya", "Biology", 50000);
-- More than Salary 55000--
SELECT * FROM Teacher
WHERE Salary > 55000;

-- Change Salary name into ctc--
ALTER TABLE teacher
CHANGE COLUMN Salary ctc INT;

-- Hike 25% ctc every teacher --
UPDATE teacher
SET ctc = ctc*1.25 ;

-- Add New Culumn City and Every teacher city by default "Madhubani" --
ALTER TABLE teacher
ADD COLUMN City VARCHAR(20) DEFAULT "Madhubani";

-- Delete the city column each teacher --\
ALTER TABLE teacher
DROP City;

SELECT * FROM Teacher;


