const arr = [1, 2, 3, 4, 5];

// Error: .forEach function does not exist on array variable
// Jab bhi apko koi function or polyfill likhana hai to "Real Signature" Ko Samjho

// Real Signture : array.forEach((currentValue, index, array) => {}, thisArg)

// Most Use Case Signture : Function input,value,index, no return and calls my function for every value

// PolyFill
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn) {
        const originalArr = this; // Current Object
        for (let i = 0; i < originalArr.length; i++) {
            userFn(originalArr[i], i);
        }
    };
}

// const a = arr.forEach(function (value, index) {
//     console.log(`Array Index - ${index} and Value - ${value}`);
// })

arr.myForEach(function (value, index) {
    console.log(`Array Index - ${index} and Value - ${value}`);
});

// console.log(a); // That is not return
