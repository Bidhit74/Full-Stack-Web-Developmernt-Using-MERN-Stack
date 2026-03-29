// reduce() method reduces an array to a single value.
// ✅ reduce returns single value ✅ reduce uses accumulator
//  array.reduce(function(accumulator, currentValue, index, array){
//    return value;
// }, initialValue)

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (cb, initialValue) {
        // Check cb is function
        if (typeof cb !== "function") {
            throw new TypeError(callback + " is not a function");
        }
        let accumulator = initialValue;
        let startIndex = 0;
        // If no initial value
        if (accumulator === undefined) {
            accumulator = this[0];
            startIndex = 1;
        }
        for (let i = startIndex; i < this.length; i++) {
            if (i in this) {
                accumulator = cb(accumulator, this[i], i, this);
            }
        }
        return accumulator;
    };
}

const arr = [1, , 3, 4];

const sum = arr.myReduce((acc, curr) => acc + curr, 5);

console.log(sum); // 50
