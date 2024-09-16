// Web Workers --- Usually hamara pura code single thread per chalta hai per kai baar kuchh bade calculations performed karna per jata hai jiski wajah se mein thread busy ho jata hai yaa fir wah kafi jyada loded ho jata hai aur aapke baki tasks ki performance kam ho jaati hai tab - es situation ko handle karne ke liye we use web Workers
// Aap chaaho to apne koi tasks web workers ko bhej sakte ho jo ki dusre thread mein usko perform karega and aapka mein thread efficiently baaki cheejo ko handle kar payega

// Aap apni mein Js file se data send kar sakte ho and aap worker file data accept karoge and jo perform karna hai karoge and waha se data wapas mein file me bhejoge and mein file mein wapaas accept karega.

let nums = Array.from({ length: 10000 }, (_, b) => b + 1);
const worker = new Worker("worker.js");

worker.postMessage(nums);

worker.onmessage = function (data) {
    console.log(data.data);
};
