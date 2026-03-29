const arr = [1, 2, 3, 4, 5];

// Error: .forEach function does not exist on array variable
// Jab bhi apko koi function or polyfill likhana hai to "Real Signature" Ko Samjho

// Real Signture : array.forEach((currentValue, index, array) => {}, thisArg)

// Most Use Case Signture : Function input,value,index, no return and calls my function for every value

// PolyFill
if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (userFn, thisArg) {
        // Check userFn is function
        if (typeof userFn !== "function") {
            throw new TypeError(callback + " is not a function");
        }

        const originalArr = this; // Current Object
        for (let i = 0; i < originalArr.length; i++) {
            // "i in this" --> empty array indexes skip karne ke liye
            if (i in this) {
                //thisArg --> callback function ke andar "this" set karne ke liye
                // call() is used to invoke a function and explicitly set the value of "this".
                userFn.call(thisArg, originalArr[i], i, originalArr);
            }
        }
    };
}

// const a = arr.forEach(function (value, index) {
//     console.log(`Array Index - ${index} and Value - ${value}`);
// })

arr.forEach(function (value, index) {
    console.log(`Array Index - ${index} and Value - ${value}`);
});

// Check i in this condition
// const arr1 = [1, , 3];
// arr1.myForEach((v) => console.log(v));

// console.log(a); // That is not return

const obj = {
    multiplier: 5,
};

const arr3 = [1, 2, 3];
arr3.myForEach(function (num) {
    console.log(num * this.multiplier);
}, obj);
