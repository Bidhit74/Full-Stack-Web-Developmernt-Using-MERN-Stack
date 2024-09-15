//ek function jo ki "this" keyword ka use karte hai aur "new" keyword ke dwaara naye aye object bana bana kar deta ho aisa function ko cunstructor function kahte hai

// function makeHuman() {
//     this.name = "Bidhit";
//     this.age = 22;
// }

// const human1 = new makeHuman("Bidhit", 22);

// Aisa koi bhi function jismein app "this" keyword ka use karte hai aur us function ko call karte samay app "new" keyword ka use karte hai, to "new" keyword ka matlab waha per ek blank object ho jata hai

//Prototypal Inheritance ----- Hum objects create karte hai and kisi ek parent constructor function ke prototype mein kuchh add kar dete hai and jab bhi add hota hai to wo parent ko prototype mein di gayi thi wo milti hai

function makeHuman(name, age) {
    this.name = name;
    this.age = age;
    // this.printMyName = function () {
    //     console.log(this.name);  // memory jyada use kar raha hai dono me esi problem ko dur karne ke liye prototype inheritance ka use karte hai
    // };
}

//prototype inheritance
makeHuman.prototype.printMyName = function () {
    // single jagah store hota hai aur esi sab use kar sakta hai
    console.log(this.name);
};

const human1 = new makeHuman("Bidhit", 22);
const human2 = new makeHuman("Bidhit", 25);
console.log(human1);
console.log(human2);
