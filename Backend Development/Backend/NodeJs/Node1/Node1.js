const fs = require("fs");
const math = require("./math");
fs.writeFile("./test.text", "Hello Bidhit", () => {});

// Node Internals wrapper function element
// console.log(__filename, __dirname);

function __require(id) {
  // ... agar id . se shuru hua toh user ki dir me code dhundega
  // agar id . se start nahi hai to Node khud ke module mei dhundega
}

console.log(math.add(88, 78));
console.log(math);
