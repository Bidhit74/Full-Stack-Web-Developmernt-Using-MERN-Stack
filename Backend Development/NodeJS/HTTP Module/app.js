const http = require("http");

const server = http.createServer((req, res) => {
    //  Create Basics Routing
    if (req.url === "/") {
        res.end("Hello World");
    } else if (req.url === "/about") {
        res.end("Created this page by Bidhit Chaudhary");
    } else {
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    console.log("Press Ctrl+C to stop the server.");
});
