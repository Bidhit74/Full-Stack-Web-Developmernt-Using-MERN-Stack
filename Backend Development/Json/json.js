console.log("This is a JSON file for testing purposes.");

const jsonData = `{
    "name": "Bidhit",
    "age": 23,
    "isStudent": true,
    "skills": ["Java", "React", "Node.js"],
    "address": {
        "city": "Darbhanga",
        "state": "Bihar"
    }
}
`;
// parsing the JSON data to perform operations
const parsedData = JSON.parse(jsonData);
console.log("Name", parsedData.name);
console.log("Age:", parsedData.age);
console.log("Is Student:", parsedData.isStudent);
console.log("Skills:", parsedData.skills.join(", "));
console.log("Address:", parsedData.address.city, ",", parsedData.address.state);

// JavaScript Object
const student = {
    id: 1,
    name: "Bidhit",
    age: 23,
    course: "BCA",
    email: "bidhit@example.com",
};

// Converting JavaScript Object to JSON
const studentJson = JSON.stringify(student); // converting object to JSON string
console.log("Student JSON:", studentJson);
