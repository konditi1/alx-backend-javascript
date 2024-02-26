// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Read input from stdin
process.stdin.on('data', (data) => {
  const input = data.toString().trim(); // Trim whitespace and newlines
  console.log('Your name is:', input);
  console.log('This important software is now closing');
  process.exit(0); // Exit the script
});

process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(0);
})
