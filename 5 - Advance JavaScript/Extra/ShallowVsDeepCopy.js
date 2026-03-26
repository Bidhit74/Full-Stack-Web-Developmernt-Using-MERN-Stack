let p1 = {
    fname: "Bidhit",
    lname: "Chaudhary",
    address: {
        Vill: "Barhi",
        Post: "Nagwas",
    },
};
// let p2 = { ...p1 }; // Copy karta hai and different location
// Yah bus shallow copy karta

// p1.address.Vill = "PS Barhi" // yah dono me change karega kuyki yah shallow copy karta aur addres ek new object.
// Shallow Copy - Bus first leyer of object ko copy karta hai
// p1.fname = "Binit" // Yaha pe Bus p1 ke object ko change karega

// Deep Copy:- Yah bhi copy karta like shallow copy but nested leyer ko bhi copy karta hai jis se original object jo nested layer ka hota wah change nahi hota hai

// Deep Copy Technique Using String to Object (First Convert String than Copy and than convert object)
let covertString = JSON.stringify(p1); // 1st step
console.log(covertString);
let p2 = JSON.parse(covertString); // copy and with convert object
console.log(p2);
p2.address.Vill = "PS Barhi";

console.log(p2);
console.log(p1);
