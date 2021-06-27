
// need a func that gives the computer a random guess per game

// global var that has all three options
const options = ['rock', 'paper', 'scissors'];

// give the AI a random choice
function computerChoice() {
    computerGuess = options[Math.floor(Math.random()*options.length)];
    return computerGuess;
}
// give the player the opportunity to chose

function playerChoice() {
    /* do  {
        let promptChoice = (prompt("Paper, Scissors or Rock?")).toLowerCase();
    }
    while (
        promptChoice.indexOf(options[0]) !== -1|| 
        promptChoice.indexOf(options[1]) !== -1|| 
        promptChoice.indexOf(options[2]) !== -1
    ); */
    let promptChoice = (prompt("Paper, Scissors or Rock?")).toLowerCase();
    console.log(promptChoice);
    return promptChoice;
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

// need to play 5 games and keep track of the game and score.
function game(){
    let gameCount = 1;
    let playerScore = 0;
    let computerScore = 0;

// loop through instances of games and update score on each run
    for (let i = 1; i < 6; ++i){
        let playerSelection = playerChoice();
        let computerSelection = computerChoice();
        let result = playRound(playerSelection, computerSelection);
        
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