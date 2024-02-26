const readline = require('readline');

/**
 * Creates an interface for reading from stdin.
 * @type {readline.Interface}
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Asks the user for their name and logs it to the console.
 * @param {string} question - The question to ask the user.
 */
rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
  console.log('Your name is:', answer);
  rl.close();
});

/**
 * Listens for the 'close' event and logs a message when the input stream is closed.
 * @event rl#close
 */
rl.on('close', () => {
  console.log('This important software is now closing');
});

module.exports = rl;
