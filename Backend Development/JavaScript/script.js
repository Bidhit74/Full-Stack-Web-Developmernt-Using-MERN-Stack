// 0, false, undefined, null, NaN, "", ducument.all --- Falsy Values
// 1, true, "hello", {}, [], function(){} --- Truthy Values

// Loops

/*
// 1. for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 2. while loop - Runs as long as condition is true.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// 3. do...while - Runs at least once, then checks condition.
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

*/
// 4. for...in -  Loops through object properties.
let person = { name: "Bidhit", age: 25 };
for (let key in person) {
    console.log(key, person[key]);
}

// 5. for...of - Loops through iterable items like arrays.

let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}

// 6. forEach - Array method to execute a function for each array element.
arr.forEach(function (value, index) {
    console.log(index, value);
});
