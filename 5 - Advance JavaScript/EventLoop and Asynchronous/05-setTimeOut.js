//setTimeout - setTimeout ka code kuchh der baad run hota hai

let size = 1000;
let arr = Array(size).fill(1);
console.log(arr);

// Iterate With Normal For Loop
let t1 = performance.now();
for (let i = 0; i < size; i++) {
    console.log(arr[i]);
}
let t2 = performance.now();
console.log(`${t2} - ${t1} \n
Normal Loop Takes Time to Run ${t2 - t1}ms`);

setTimeout(() => {
    console.log("This is PRint after 5 Seconds");
}, 5000);

let t3 = performance.now();
for (let i = 0; i < size; i++) {
    console.log(arr[i]);
}
let t4 = performance.now();
console.log(`${t4} - ${t3} \n
Normal Loop Takes Time to Run ${t4 - t3}ms`);
