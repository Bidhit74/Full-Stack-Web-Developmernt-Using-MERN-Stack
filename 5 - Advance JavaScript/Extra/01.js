const teas = [
    "Green Tea",
    "Black Tea",
    "Oolong Tea",
    "White Tea",
    "Herbal Tea",
];

// Add element in exting list/Array
teas.push("Chamomile Tea");

// Remove "Oolong Tea"
//array.splice(startIndex, deleteCount)
teas.splice(2, 1);

// filter the list to only include teas that are caffeinated
// array.filter((item) => condition)
// filter always return new array not change original array

let notCaffeinated = "Herbal Tea";
const onlyCaffeinatedTeas = teas.filter((tea) => tea !== notCaffeinated);
console.log(onlyCaffeinatedTeas);

// Sort
// console.log(teas.sort());

// Print the Array one by one
// array.forEach((item, index) => {});
teas.forEach((tea) => console.log(tea));

// count how many tea is caffeinated
let count = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "Herbal Tea") {
        count += 1;
    }
}
console.log(`Caffeinated Tea Number ${count}`);

// Create new array all teas Name Uppercase
let upTeas = new Array();

teas.forEach((tea) => {
    // let upTea = tea.toUpperCase();
    // upTeas.push(upTea);
    upTeas.push(tea.toUpperCase());
});

console.log(upTeas);

// Use the for loop to find the tea name with the most Character.
let maxCharTea = "";
let maxChar = 0;
for (let i = 0; i < teas.length; i++) {
    let tea = teas[i].length;
    if (maxChar < tea) {
        maxChar = tea;
        maxCharTea = teas[i];
    }
}

console.log(`Most Character Tea:- ${maxCharTea}`);

// Use For loop and reverse the order of teas in the array.
const reverseArr = [];
for (let i = teas.length - 1; i >= 0; i--) {
    reverseArr.push(teas[i]);
}
console.log(teas);
console.log(reverseArr);
