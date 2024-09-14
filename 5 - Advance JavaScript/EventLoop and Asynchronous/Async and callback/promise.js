// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     console.log(internetSpeed);
//     if (internetSpeed > 5) {
//         success();
//     } else {
//         failure();
//     }
// }

// Callback Hell
// savetoDb(
//     "Bidhit Database",
//     () => {
//         console.log("Your data was saved");
//         savetoDb(
//             "Bidhit Database2",
//             () => {
//                 console.log("Your data was saved2");
//                 savetoDb(
//                     "Bidhit Database3",
//                     () => {
//                         console.log("Your data was saved3");
//                     },
//                     () => {
//                         console.log("week connection. data not saved3");
//                     }
//                 );
//             },
//             () => {
//                 console.log("week connection. data not saved2");
//             }
//         );
//     },
//     () => {
//         console.log("week connection. data not saved");
//     }
// );

// callback resolving using promise

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         console.log(internetSpeed);
//         if (internetSpeed > 4) {
//             resolve("Success");
//         } else {
//             reject("Failure");
//         }
//     });
// }
// savetoDb("MongoDB")
//     .then((response) => {
//         console.log(response);
//         console.log("Promise resolved");
//     })
//     .catch((error) => {
//         console.log(error);
//         console.log("Promise rejected");
//     });

// promise chaining

function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(internetSpeed);
        if (internetSpeed > 4) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    });
}

savetoDb("MongoDB")
    .then(() => {
        console.log("Promise resolved");
        savetoDb("MongoDB").then(() => {
            console.log("Promise resolved2");
            savetoDb("MongoDB").then(() => {
                console.log("Promise resolved3");
                savetoDb("MongoDB").then(() => {
                    console.log("Promise resolved4");
                    savetoDb("MongoDB").then(() => {
                        console.log("Promise resolved5");
                    });
                });
            });
        });
    })
    .catch(() => {
        console.log("Promise rejected");
    });

// savetoDb("MongoDB")
//     .then(() => {
//         console.log("Promise resolved");
//         return savetoDb("MongoDB");
//     })
//     .then(() => {
//         console.log("Promise resolved2");
//         return savetoDb("MongoDB");
//     })
//     .then(() => {
//         console.log("Promise resolved3");
//         return savetoDb("MongoDB");
//     })
//     .then(() => {
//         console.log("Promise resolved4");
//         return savetoDb("MongoDB");
//     })
//     .then(() => {
//         console.log("Promise resolved5");
//         return savetoDb("MongoDB");
//     })
//     .catch(() => {
//         console.log("Promise rejected");
//     });

// savetoDb("MongoDB")
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.log(error);
//     });
