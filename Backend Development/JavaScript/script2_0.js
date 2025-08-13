let name = "Bidhit Chaudhury";
let age = 22;

// module.exports = { name, age }; // Exporting an object containing both name and age
// module.exports = age; // one file can export multiple values, but only the last one will be used

// another way
module.exports.name = name; // Exporting name
module.exports.age = age; // Exporting age
