// Import the HTTP module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = '3000';

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // text/plain, text/html
    res.end('Hello, World!\n');
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})