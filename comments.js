// Create web server
// Create a web server that listens to incoming requests and responds with comments from comments.json.
// The server should listen on port 3000 and respond with the comments when a request is made to the /comments endpoint.
// Use the readFile function from the fs module to read comments.json.
// Use the JSON.parse function to parse the data from comments.json.
// Use the res object to send the parsed comments as a response to the client.
// If an error occurs while reading the file, respond with a 500 status code.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    fs.readFile('./comments.json', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        const comments = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});