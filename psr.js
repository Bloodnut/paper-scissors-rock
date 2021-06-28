// global var that has all three options
const options = ['rock', 'paper', 'scissors'];

// give the AI a random choice
function computerChoice() {
    computerGuess = options[Math.floor(Math.random()*options.length)];
    return computerGuess;
}
// give the player the opportunity to chose

function playerChoice() {
    let promptChoice;
    do { 
        promptChoice = prompt("Paper, Scissors or Rock?").toLowerCase();
    }
    while (!options.includes(promptChoice)); 
    return promptChoice;
}

// single round of paper scissors rock
function playRound(playerSelection, computerSelection) {
    console.log("Player choice: " + playerSelection);
    console.log("Computer choice: " + computerSelection);

    if (playerSelection == computerSelection) {
        let drawOutcome = "This round is a draw! ";
        console.log(drawOutcome);
        return "draw";
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection ==='paper')){
        let winOutcome = "You win this round! " + playerSelection + " beats " + computerSelection;
        console.log(winOutcome);
        return "win";
    }
    else {
        let loseOutcome = "You lose this round! " + computerSelection + " beats " + playerSelection;
        console.log(loseOutcome);
        return "lose";
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
        console.log("Round " + i);
        let result = playRound(playerSelection, computerSelection);
        switch (result){
            case "win":
                playerScore++;
                gameCount++;
                console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
                break;
            case "lose":
                computerScore++;
                gameCount++;
                console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
                break;
            case "draw":
                gameCount++;
                console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
                break;
            default:
                console.log("wtf how did you even get to this case???");
                break;
        }
    }
    if (playerScore > computerScore){
        console.log("You won the whole game! ");
    }   
    else {
        console.log("You lost! Suck eggs... ");
    }
}
game();

/*if (result === "win") {
            playerScore++;
            gameCount++;
            console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
        else if (result == "loss"){
            computerScore++;
            gameCount++;
            console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
        else {
            gameCount++;
            console.log("After round report: \n\n Player score: " + playerScore + " Computer Score: " + computerScore);
        }
        */