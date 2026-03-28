// Filter : filter() method returns a new array with elements that pass a condition.
// Filter Signature: Return - new array | input : callback function - agar user ka function true return karta hai to current value ko new array me push kar deta hai
// filter() → condition check → return matching elements

// myFilter polyfill
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (cb) {
        const result = [];
        for (let i = 0; i < this.length; i++) {
            const value = cb(this[i], i);
            if (value === true) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

const arr = [2, 6, 3, 8, 4, 5, 7];

const filterArr = arr.myFilter((e) => {
    return e % 2 == 0;
});
console.log(arr);
console.log(filterArr);
