
// need a func that gives the computer a random guess per game

// global var that has all three options
const options = ['rock', 'paper', 'scissors'];
const playerSelection = 'paper';

function computerPlay() {
    computerGuess = options[Math.floor(Math.random()*options.length)];
    return computerGuess;
    console.log(computerGuess);
}
// single round of paper scissors rock
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection + " is what the player picked (playRound)");
    console.log(computerSelection +  " is what the computer randomed (playRound)");

    if (playerSelection == computerSelection) {
        let drawOutcome = "It's a draw ";
        return drawOutcome;
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection ==='paper')){
        let winOutcome = "You win! " + playerSelection + " beats " + computerSelection;
        return winOutcome;
    }
    else {
        let loseOutcome = "You lose! " + computerSelection + " beats " + playerSelection;
        return loseOutcome;
    }

}
// need to play 5 games and keep track of the game and score. init score trackers for computer/player
function game(){
    let gameCount = 1;
    let playerScore = 0;
    let computerScore = 0;

// loop through instances of games and update score
// call the computerSelection var every time, so we have a new AI choice per instance
// test for the string 'You win!' and store the result in 'result'... it will only run once, right?
    for (let i = 1; i < 6; ++i){
        console.log("Round: " + i);
        let computerSelection = computerPlay();
        
        let result = playRound(playerSelection, computerSelection);
        //use a quarternary operator?
        if (/You win!/gi.test(result)) {
            playerScore++;
            gameCount++;
            console.log("You won (game)");
            console.log("After game report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
        else if (/You lose!/gi.test(result)){
            computerScore++;
            gameCount++;
            console.log("You lost (game)");
            console.log("After game report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
        else {
            gameCount++;
            console.log("You drew(game)");
            console.log("After game report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
    }
}

game();
/* some code that I'll eventually use to check the string is in the right format
let playerSelection = (prompt("Paper, Scissors or Rock?"));
    if (typeof playerSelection != "string") {
        alert("You have to enter either Paper, Scissors or Rock!");
    }
    else {
        playerSelection = playerSelection.toLowerCase();*/ 
