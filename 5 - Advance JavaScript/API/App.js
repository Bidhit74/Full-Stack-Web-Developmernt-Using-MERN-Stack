//fetch --- Kuyki ye internet per jayega aur fir data lekar ayega to esme time lagega esiliye fetch api by default hi Js mein fetch ko asynchronous(async) banaya gaya hai

let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then(function (response) {
//         console.log(response);
//         let res = response.json();
//         res.then((data) => {
//             console.log(data);
//             // console.log(data.fact);
//             // console.log(data.length);
//         });
//     })
//     .catch(function (err) {
//         console.log("Error fetch", err);
//     });

// fetch(url)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//         console.log(data.fact);
//         console.log(data.length);
//         return fetch(url);
//     })
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data2) => {
//         console.log(data2);
//         console.log(data2.fact);
//     })
//     .catch(function (err) {
//         console.log("Error fetch", err);
//     });

// console.log("Asynchronous fetching data");

// async function getFetch() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(res);
//         console.log(data);
//         console.log(data.fact);
//     } catch (error) {
//         console.log("Error", error);
//     }
//     console.log("Asynchronous fetching data");
// }

// getFetch();
