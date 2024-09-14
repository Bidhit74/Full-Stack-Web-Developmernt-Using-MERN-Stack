// async function greeting() {
//     // throw "Random error";
//     return "hello";
// }

// greeting()
//     .then((response) => {
//         console.log("Promise is successful");
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log("Promise is rejected");
//         console.log(error);
//     });

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 2000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

let h1 = document.querySelector("h1");

function colorChange(color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve();
        }, 2000);
        let num = Math.floor(Math.random() * 10) + 1;
        console.log(num);
        if (num > 3) {
            reject("Invalid number");
        }
    });
}

async function chainger() {
    await colorChange("blue");
    await colorChange("red");
    await colorChange("green");
    await colorChange("red");
}

async function chainger() {
    try {
        await colorChange("blue");
        await colorChange("red");
        await colorChange("green");
        await colorChange("red");
    } catch (err) {
        console.log(err);
    }

    console.log("First"); //pahle await chalega baad me yah chalega
    console.log("First");
    console.log("First");
    console.log("First");
    console.log("First");
}

chainger();
