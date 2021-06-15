
// need a func that gives the computer a random guess per game

// global var that has all three options
const options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    computerGuess = options[Math.floor(Math.random()*options.length)];
    return computerGuess;
    console.log(computerGuess);
}
//single round of paper scissors rock
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);

    if (playerSelection == computerSelection) {
        let drawOutcome = "It's a draw" + computerSelection + playerSelection;
        console.log(drawOutcome);
        return drawOutcome;
    }

}
const playerSelection = 'paper';
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);




/* some code that I'll eventually use to check the string is in the right format
let playerSelection = (prompt("Paper, Scissors or Rock?"));
    if (typeof playerSelection != "string") {
        alert("You have to enter either Paper, Scissors or Rock!");
    }
    else {
        playerSelection = playerSelection.toLowerCase();*/ 
/*some other code I have to check all win conditions
        else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection ==='paper')){
            let winOutcome = "You win!" + playerSelection + " beats " + computerSelection;
            return winOutcome;
            console.log(winOutcome);
        }
        else {
            let loseOutcome = "You lose!"; + computerSelection + " beats " + playerSelection
            return loseOutcome;
            console.log(loseOutcome);*/