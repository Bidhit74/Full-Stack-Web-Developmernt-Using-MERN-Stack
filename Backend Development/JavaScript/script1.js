// Callbacks, Promise and asunc/await

// Callback function example
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
