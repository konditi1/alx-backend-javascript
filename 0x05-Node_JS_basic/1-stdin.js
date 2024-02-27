/**
 *
 * Define a function that accepts user
 * input from the standard input stream.
 *
 * */
const msg = 'Welcome to Holberton School, what is your name?';

// Prompt user for input,
process.stdout.write(`${msg}\n`);
// Accept user input,
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Only print custom message when user ends
// the program.
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
