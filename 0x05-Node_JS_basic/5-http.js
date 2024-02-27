const http = require('http');
const fs = require('fs');

// Function to read file asynchronously
function readFileAsync(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
}

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handling different URL paths
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    const databasePath = 'your_database.csv'; // Specify the path to your database file
    readFileAsync(databasePath, (err, data) => {
      if (err) {
        res.write('Error reading the database');
        res.end();
        return;
      }
      const lines = data.trim().split('\n').filter(line => line.trim() !== ''); // Filter out empty lines
      const students = lines.map(line => line.split(',')[0]); // Extract student names
      res.write(`This is the list of our students: ${students.join(', ')}`);
      res.end();
    });
  } else {
    res.write('404 Not Found');
    res.end();
  }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app variable
module.exports = app;
