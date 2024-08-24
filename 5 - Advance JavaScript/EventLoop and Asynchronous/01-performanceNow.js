// Normal performance
// let t1 = performance.now();
// for (let i = 0; i < 2000; i++) {
//     let newElement = document.createElement("p");
//     newElement.textContent = "This is paragraph" + i;
//     document.body.appendChild(newElement);
// }

// let t2 = performance.now();
// console.log(`${t2} - ${t1} \n Normal Loop Takes Time to Run ${t2 - t1}ms`);

// //Optimizing performance
// let t3 = performance.now();
// let Mydiv = document.createElement("div");

// for (let i = 0; i < 2000; i++) {
//     let Element = document.createElement("p");
//     Element.textContent = "This is paragraph" + i;
//     Mydiv.appendChild(Element);
// }
// document.body.appendChild(Mydiv);
// let t4 = performance.now();
// console.log(`${t4} - ${t3} \n Optimizing performance ${t4 - t3}ms`);

// It is standard way to measure how long your code taken to run.
// let size = 1000;
// let arr = Array(size).fill(1);
// console.log(arr);

// Iterate With Normal For Loop
// let t1 = performance.now();
// for (let i = 0; i < size; i++) {
//     console.log(arr[i]);
// }
// let t2 = performance.now();
// console.log(`${t2} - ${t1} \n
// Normal Loop Takes Time to Run ${t2 - t1}ms`);

// // Iterate with for of
// t1 = performance.now();
// for (let i of arr) {
//     console.log(i);
// }
// t2 = performance.now();
// console.log(`${t2} - ${t1} \n For Of Takes Time to Run ${t2 - t1}ms`);

// // // For Each Loop
// t1 = performance.now();
// arr.forEach((value) => {
//     console.log(value);
// });
// t2 = performance.now();
// console.log(`For Each Takes Time to Run ${t2 - t1}ms`);

// // // While Loop
// t1 = performance.now();
// let i = 0;
// while (i < size) {
//     console.log(arr[i]);
//     i++;
// }
// t2 = performance.now();
// console.log(`While Loop Takes Time to Run ${t2 - t1}ms`);
