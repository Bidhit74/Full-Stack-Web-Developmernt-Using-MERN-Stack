// call apply bind -- ye teeno tareeka hai function ko call karne ke kisi object ko this man kar

const obj = {
    name: "Bidhit",
};
// call
// function abc() {
//     console.log(this);
// }
// abc.call(obj);
// abc.call("Bidhit");
// abc.call("Bidhit");

// apply
// function abc(a, b, c) {
//     console.log(this);
//     console.log(a, b, c);
// }
// abc.apply(obj, [1, 2, 3]); // applly (obj , array) == apply(obj,[]).

// bind -- bind ekdam call ki tarah kaam karte hai lekin yah ek new function return karta hai jo baad me us function ko chala sake

function abc() {
    console.log(this);
}

const newFunc = abc.bind(obj);
newFunc();
