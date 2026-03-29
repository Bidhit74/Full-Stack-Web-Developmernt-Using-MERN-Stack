// Create Map Polyfill
// map() takes callback function and returns new array after modifying each element.
// map Signture: array.map((currentValue, index, array) => {}, thisArg)
// map Signture: Return New Array, Each element Iterate, callback function, original array ko nahi change karta hai

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback, thisArg) {
        // Edge Case for callback function
        if (typeof callback !== "function") {
            throw new TypeError()(callback + " is not a function");
        }

        const newArray = new Array(this.length);

        for (let i = 0; i < this.length; i++) {
            // "i in this" --> empty array indexes skip karne ke liye
            if (i in this) {
                newArray[i] = callback.call(thisArg, this[i], i, this);
            }
        }
        return newArray;
    };
}

const arr = [1, 2, 3, 4, 5];

const n = arr.myMap((v, i) => {
    console.log(`Value = ${v} and Index = ${i}`);
    return v * 4;
});
console.log(n);
console.log(arr);

// | Normal Function     | Arrow Function         |
// | ------------------- | ---------------------- |
// | has own `this`      | no own `this`          |
// | has arguments       | no arguments           |
// | can use constructor | cannot use constructor |
