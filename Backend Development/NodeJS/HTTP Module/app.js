const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World, Bidhit Chaudhary");
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
    console.log("Press Ctrl+C to stop the server.");
});
