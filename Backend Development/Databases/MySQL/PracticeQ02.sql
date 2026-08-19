Use College;

CREATE TABLE Student(
	roll_no INT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    city VARCHAR(20),
    marks TINYINT
);

Insert Into Student(roll_no, name, city, marks)
VALUES
(110, "Bidhit", "Madhubani", 80),
(108, "Binit", "Dharbhanga", 75),
(112, "Navnit", "Benipatti", 65),
(124, "Lakshmi", "Madhubani", 90);

-- Select student marks 75+ --
Select * from student
Where marks > 75;

-- Group by student based on city --
Select city from student
GROUP BY city;

-- Find the maximum marks for each city --
Select city, max(marks) 
from student
GROUP BY city;

-- find the Average of Class --
Select AVG(marks) from student;

Select * from student;