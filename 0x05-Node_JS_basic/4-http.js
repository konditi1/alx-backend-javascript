/**
 * Create a new HTTP server.
 *
 */
const http = require('http');

const port = 1245;
const app = http.createServer((request, response) => {
  response.end('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
