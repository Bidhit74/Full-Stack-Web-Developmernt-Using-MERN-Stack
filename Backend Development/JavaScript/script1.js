// Callbacks, Promise and asunc/await

// Callback function example
/*
function conectToServer(cbfn) {
    console.log("Connecting to server...");
    setTimeout(() => {
        console.log("Server is connected");
        cbfn();
    }, 2000);
}

function fatchingData(cbfn) {
    console.log("Fetching data from server...");
    setTimeout(() => {
        cbfn(["Course 1", "Course 2", "Course 3"]);
    }, 3000);
}

// Using the callback functions
conectToServer(() => {
    fatchingData((data) => {
        console.log("Data fetched from server:", data);
    });
});
*/

// Promise and async/await example
function connectToServer() {
    console.log("Connecting to server...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Server is connected");
        }, 2000);
    });
}

function getCourses() {
    console.log("Fetching data from server...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Course 1", "Course 2", "Course 3"]);
        }, 3000);
    });
}

/*
connectToServer()
    .then((response) => {
        // Handle the resolved promise
        console.log(response);
        return getCourses(); // Return the next promise
    })
    .then((courses) => {
        // Handle the resolved promise from getCourses
        console.log("Data fetched from server:", courses);
    })
    .catch(); // Handle the rejected promise

*/

// Async/await example
async function fetchData() {
    try {
        const response = await connectToServer();
        console.log(response);
        const courses = await getCourses();
        console.log("Data fetched from server:", courses);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
fetchData();
