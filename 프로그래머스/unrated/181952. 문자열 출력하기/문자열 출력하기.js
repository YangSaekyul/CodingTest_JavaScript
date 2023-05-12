// Create the readline interface to read input from the user
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Declare the input array to store user input
let input = [];

// Read input from the user line by line
rl.on('line', function(line) {
  input = [line];
}).on('close', function() {
  // Retrieve the input string from the input array
  const str = input[0];

  // Print the input string
  console.log(str);
});
