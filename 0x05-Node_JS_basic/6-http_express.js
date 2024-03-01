/**
 * Create a new server using Express.
 *
 */
const express = require('express');

const port = 1245;
const app = express();

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
