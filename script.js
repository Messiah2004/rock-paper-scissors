
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

//const btnDiv = document.querySelector("#btnDiv");
const scrDiv = document.querySelector("#scoreDiv");
const rsltDiv = document.querySelector("#resultDiv");

const mainDiv = document.querySelector("#mainDiv");
const body = document.querySelector("body");

const imgRock = document.querySelector("rock");
const imgPaper = document.querySelector("paper");
const imgScissor = document.querySelector("scissors");



//const buttonRock = document.createElement("button");
//const buttonPaper = document.createElement("button");
//const buttonScissors = document.createElement("button");
const p1 = document.createElement("p");
const scrP1 = document.createElement("p");
const scrP2 = document.createElement("p");
const scrP3 = document.createElement("p");
const scrP4 = document.createElement("p");

//buttonRock.textContent = "Rock";
//buttonPaper.textContent = "Paper";
//buttonScissors.textContent = "Scissor";

//buttonRock.classList.add("rock");
//buttonPaper.classList.add("paper");
//buttonScissors.classList.add("scissors");

//btnDiv.appendChild(buttonRock);
//btnDiv.appendChild(buttonPaper);
//btnDiv.appendChild(buttonScissors);
rsltDiv.appendChild(p1);
scrDiv.appendChild(scrP1);
scrDiv.appendChild(scrP2);
scrDiv.appendChild(scrP3);
scrDiv.appendChild(scrP4);

//const buttons = document.querySelectorAll("button");
const imgs = document.querySelectorAll ("img");

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0; 

function checkScore(){

    scrP1.textContent = `Round number: ` + `${roundNumber}`;
    scrP2.textContent = `Player score: ` + `${playerScore}`;
    scrP3.textContent = `Computer score: ` + `${computerScore}`;

    if (roundNumber === 5) {
        if (playerScore <= 1) {
            if (playerScore > computerScore){
                scrP4.textContent = `You win! You won ${playerScore} round! The loser didn't win a single round.`
                return;
            } else if (playerScore < computerScore) {
                if (computerScore !== 1) {
                    if (playerScore !== 1) {
                        scrP4.textContent = `You lost! You won ${playerScore} rounds. The winner won ${computerScore} rounds!`
                        return;
                    } else 
                        scrP4.textContent = `You lost! You won ${playerScore} round. The winner won ${computerScore} rounds!`
                        return;
                } else {
                    scrP4.textContent = `You lost! You won ${playerScore} rounds. The winner won ${computerScore} round!`
                    return;
                }
            } else if (playerScore === computerScore) {
                if (computerScore !== 1) {
                    scrP4.textContent = `You tied! How anticlimactic. You both won ${playerScore} rounds.`
                    return;
                } else {
                    scrP4.textContent = `You tied! How anticlimactic. You both won ${playerScore} round.`
                    return;
                }
            }
        } else if (playerScore > 1) {
            if (playerScore > computerScore) {
                if (computerScore !== 1) {
                    scrP4.textContent = `You win! You won ${playerScore} rounds! The loser won ${computerScore} rounds.`
                    return;
                } else {
                    scrP4.textContent = `You win! You won ${playerScore} rounds! The loser won ${computerScore} round.`
                    return;
                }
            } else if (playerScore < computerScore) {
                scrP4.textContent = `You lost! You won ${playerScore} rounds. The winner won ${computerScore} rounds!`
                return;
            } else if (playerScore === computerScore) {
                scrP4.textContent = `You tied! How anticlimactic. You both won ${playerScore} rounds.`
                return;
            }
        }

        //playerScore = 0;
        //computerScore = 0;
        //roundNumber = 0; 
        
        //p1.textContent = "";
        //scrP1.textContent = "";
        //scrP2.textContent = "One more round?";
        //scrP3.textContent = "";

    } else {
        scrP4.textContent = "";
    }   
}

function restartGame () {
    checkScore ();
    if (roundNumber === 5) {
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0; 
        
        p1.textContent = "";
        scrP1.textContent = "";
        scrP2.textContent = "One more round?";
        scrP3.textContent = "";
    }
}

function playRound(playerSelection, computerSelection) {

   // playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();

  // playerSelection = `${btn.getAttribute('class')}`;

   computerSelection = getComputerChoice();

    if (playerSelection === "rock") {
        switch (computerSelection){
            case "rock" :
                //return("You tied! Try again!");
                p1.textContent = "You tied! Try again!";
                roundNumber++;
                break;
            case "paper" :
                computerScore++;
                //return("You lost! Paper beats rock!");
                p1.textContent = "You lost! Paper beats rock!";
                roundNumber++;
                
                break;
            case "scissors":
                playerScore ++ ;
                //return("You won! Rock beats scissors!");
                p1.textContent = "You won! Rock beats scissors!";
                roundNumber++;
            }

        } else if (playerSelection === "paper") {
            switch (computerSelection){
                case "paper" :
                    //return("You tied! Try again!");
                    p1.textContent = "You tied! Try again!";
                    roundNumber++;

                    break;
                case "scissors" :
                    computerScore++;
                    //return("You lost! Scissors beats paper!");
                    p1.textContent = "You lost! Scissors beats paper!";
                    roundNumber++;

                    break;
                case "rock":
                    playerScore ++ ;
                    //return("You won! Paper beats rock!");
                    p1.textContent = "You won! Paper beats rock!";
                    roundNumber++;
            }

        } else if (playerSelection === "scissors") {
            switch (computerSelection) {
                case "scissors" :
                    //return("You tied! Try again!")
                    p1.textContent = "You tied! Try again!";
                    roundNumber++;

                    break;
                case "rock" :
                    computerScore++;
                    //return("You lost! Rock beats scissors!");
                    p1.textContent = "You lost! Rock beats scissors!";
                    roundNumber++;

                    break;
                case "paper" : 
                    playerScore++ ;
                    //return("You won! Scissors beats paper!");
                    p1.textContent = "You won! Scissors beats paper!";
                    roundNumber++;
            }

        } else {
            //return ("Do you even know how to play this game?");
            p1.textContent += "Do you even know how to play this game?\n";

        }

    restartGame();
}


//scrP1.textContent += `Round number: ` + `${roundNumber}` + `\n`;
//scrP2.textContent += `Player score: ` + `${playerScore}` + '\n';
//scrP3.textContent += `Computer score: ` + `${computerScore}` + '\n';

//buttons.forEach(btn => btn.addEventListener("click", function () {playRound(`${btn.getAttribute('class')}`);} ) ); 
imgs.forEach(img => img.addEventListener("click", function () {playRound(`${img.getAttribute('class')}`);} ) ); 

 
    