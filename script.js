
let materials = ["rock", "paper", "scissors"];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

function getComputerChoice() {
    let index = getRandomNumber(0, materials.length - 1);
    return materials[index];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        switch (computerSelection){
            case "rock" :
                return("You tied! Try again!");
                break;
            case "paper" :
                computerScore++;
                return("You lost! Paper beats rock!");
                break;
            case "scissors":
                playerScore ++ ;
                return("You won! Rock beats scissors!");
            }
        } else if (playerSelection === "paper") {
            switch (computerSelection){
                case "paper" :
                    return("You tied! Try again!");
                    break;
                case "scissors" :
                    computerScore++;
                    return("You lost! Scissors beats paper!");
                    breaks;
                case "rock":
                    playerScore ++ ;
                    return("You won! Paper beats rock!");
            }
        } else if (playerSelection === "scissors") {
            switch (computerSelection) {
                case "scissors" :
                    return("You tied! Try again!")
                    break;
                case "rock" :
                    computerScore++;
                    return("You lost! Rock beats scissors!");
                    break;
                case "paper" : 
                    playerScore++ ;
                    return("You won! Scissors beats paper!");
            }
        } else {
            return ("Do you even know how to play this game?");
        }

}

function game() {
    playerScore = 0;
    computerScore = 0;
    let roundNumber = 0;

    for (let i = 0; i < 5; i++){
        console.log(playRound());
        roundNumber++ ;
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore} Round: ${roundNumber}`);
       }

    (playerScore > computerScore) ? console.log(`You win! You won ${playerScore} round(s)! The loser only won ${computerScore} round(s).`) : (playerScore < computerScore) ? console.log(`You lost! You only won ${playerScore} round(s). The winner won ${computerScore} round(s)!`) : console.log(`You tied! How anticlimactic. You both won ${playerScore} round(s).`);  
    }


