const obj1 = {
    fname: "Bidhit",
    lname: "Chaudhary",
    getFullname: function () {
        return `${this.fname} ${this.lname}`;
    },
};
const obj2 = {
    fname: "Binit",
    lname: "Chaudhary",
    getFullname: function () {
        return `${this.fname} ${this.lname}`;
    },
};

// DRY - Do not repeat yourself : Esiliye ek type ka blueprint ke liye hum classes use karte hai
// console.log(obj1.getFullname());
// console.log(obj2.getFullname());

class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    getFullname() {
        return `${this.fname} ${this.lname}`;
    }
}

const p1 = new Person("Bidhit", "Chaudhary");
const p2 = new Person("Binit", "Chaudhary");

console.log(p1.getFullname());
console.log(p2.getFullname());
