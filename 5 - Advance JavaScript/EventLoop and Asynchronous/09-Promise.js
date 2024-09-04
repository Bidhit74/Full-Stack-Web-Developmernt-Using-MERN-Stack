// let prom = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("This is Print after 5 Seconds");
//     }, 5000);
//     // resolve(1);
//     reject(new Error("This is error"));
// });

// console.log("First promise");

// async function func1() {
//     return "First promise";
// }
// console.log(func1());

// async function func2() {
//     let first = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("this is the first message");
//         }, 5000);
//     });

//     let second = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("this is the second message");
//         }, 10000);
//     });

//     let third = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("this is the third message");
//         }, 1000);
//     });

//     let f = await first;
//     let s = await second;
//     let t = await third;

//     return [f, s, t];
// }

// console.log(func2());

const parchi = new Promise(function (resolve, reject) {
    fetch(`https://randomuser.me/api/`)
        .then((res) => res.json())
        .then((data) => {
            if (data.results[0].gender === "male") resolve();
            else reject();
        });
});

parchi
    .then(() => {
        console.log("Success");
    })
    .catch(() => {
        console.log("Failure");
    });
