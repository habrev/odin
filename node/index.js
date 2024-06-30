const http = require('http');
const path = require('path');
const fs = require('fs');


const port = process.env.PORT || 8080; // Use environment variable or default to 8080

const server = http.createServer((req, res) => {
  const url = req.url; // Get the requested URL
  const filePath = path.join(__dirname, 'public', url === '/' ? 'index.html' : url); // Construct file path based on URL

  // Check if file exists
fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // File not found, serve 404
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
    } else {
      // File found, serve the requested file
    res.writeHead(200);
    fs.createReadStream(filePath).pipe(res);
    }
});
});

server.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});
