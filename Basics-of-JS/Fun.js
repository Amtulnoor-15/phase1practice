// Fun Guess the Number Game (for Node.js)
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

console.log("Welcome to Guess the Number game! Try to guess the number between 1 and 100.");

rl.on('line', (input) => {
  let guess = Number(input);
  attempts++;

  if (guess < randomNumber) {
    console.log("Too low! Try again.");
  } else if (guess > randomNumber) {
    console.log("Too high! Try again.");
  } else {
    console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
    rl.close(); // End the game when correct guess is made
  }
});
