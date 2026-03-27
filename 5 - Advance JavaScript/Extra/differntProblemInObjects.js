// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content

const teas = {
    name: "Herbal Tea",
    type: "Green",
    iscaffeine: false,
};

// Problem: Access and print the name and type properties of the tea object.
console.log(`Tea Name ${teas.name} and Type is ${teas.type}.`);

// Problem: Add a new property origin to the tea object.
// We can add property in predefined object using "dot notation", bracket notation(Dynamic), or Object.assign().

// "const" allows modifying object properties but does not allow reassigning the object.
teas.origin = "India";

// Problem: Change the caffeine property of tea.
teas.iscaffeine = true;

// Problem: Remove the origin property from the tea objects.
// Use "delete" operator to remove property from object.
delete teas.origin;

// Problem: Check if the tea object has a property origin.
// Use "in" operator or "hasOwnProperty()" to check property in object.
console.log("origin" in teas);
console.log(teas.hasOwnProperty("type"));

// Problem: Use a for__in loop to print all properties of the teas object.
// for loop --> Best used for arrays
// for...in loop --> Best used for objects
for (key in teas) {
    console.log(`${key}: ${teas[key]}`);
}

// Problem: Create a nested object representing different types of teas and their properties.
const teas1 = {
    name: "Hey",
    greenTea: {
        origin: "China",
        caffeine: "Low",
        taste: "Light",
    },
    herbalTea: {
        origin: "Various",
        caffeine: "None",
        taste: "Mild",
    },
};
console.log(teas1.greenTea.origin);

// Problem: Add a custom method describe to the tea objects that returns a description string.
teas.describe = function () {
    console.log("Hello Tea");
};

teas.describe();
console.log(teas);

// Problem: Merge two objects representing different teas into one.
// Same property hone par last object ki value overwrite ho jati hai (Last wins rule).
const myTeas = { ...teas, ...teas1 };
console.log(teas);
console.log(teas1);
console.log(myTeas);
