//Global -- Window
// console.log(this);

//function -- Window
// function abc() {
//     console.log(this);
// }
// abc();

//method -- object
// let obj = {
//     name: function () {
//         console.log(this);
//     },
//     age: 25,
//     email: "abc@example.com",
// };
// obj.name();

// function inside method (es5) -- Window
// let obj1 = {
//     name: function () {
//         console.log(this); // object
//         console.log(this.age); // access object age
//         function chilfunc() {
//             console.log(this.age); // window
//             console.log(this.age); // does not access object age // undefined
//         }
//         chilfunc();
//     },
//     age: 25,
//     email: "abc@example.com",
// };
// obj1.name();

// function inside method (es6) -- Object
// let obj2 = {
//     name: function () {
//         console.log(this); // object
//         console.log(this.age); // access object age
//         const chilfunc = () => {
//             // es6 arrow function this ka value apne parent se leta hai
//             console.log(this); // object
//             console.log(this.age); // access object age
//         };
//         chilfunc();
//     },
//     age: 25,
//     email: "abc@example.com",
// };
// obj2.name();

// let obj2 = {
//     name: () => {
//         // es6 me arrow function this ka value apne parent se leta hai esi karan se ab eska parent global esiliye yah window lega
//         console.log(this); // window
//         console.log(this.age); // does not access object age // undefined
//     },
//     age: 25,
//     email: "abc@example.com",
// };
// obj2.name();

//Constructor function mein this ki value --  new blank object
// function abc() {
//     console.log(this);
// }
// const ans = new abc();
// console.log(ans);

// event listener mein this ki value -- that element jisper event listener laga ho
document.querySelector("button").addEventListener("click", function () {
    console.log(this);
});
