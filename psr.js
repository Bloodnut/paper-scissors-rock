
// need a func that gives the computer a random guess per game

// global var that has all three options
const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    computerGuess = options[Math.floor(Math.random()*options.length)];
    console.log(computerGuess);
}

