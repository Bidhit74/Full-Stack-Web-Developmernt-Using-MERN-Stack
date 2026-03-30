Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
};

function greet(name) {
    console.log(name);
}

greet.describe(); // this only function name provide karega

//Function Declaratin
function add(a, b) {
    return a + b;
}

// Function Expression
const add1 = function (a, b) {
    return a + b;
};

// First Class Functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);
console.log(result);

// Automatically call function
// This is called IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("Bidhit");
})();
