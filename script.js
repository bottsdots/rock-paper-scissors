function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 0) {
        return 'Rock';
    } else if (choice === 1 ) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let capitalPlayerSelection = (lowerCasePlayerSelection.substring(0, 1)).toUpperCase() + lowerCasePlayerSelection.substring(1);
    let lowerCaseComputerSelection = computerSelection.toLowerCase();
    let capitalComputerSelection = (lowerCaseComputerSelection.substring(0, 1)).toUpperCase() + lowerCaseComputerSelection.substring(1);
    if (capitalPlayerSelection === capitalComputerSelection) {
        return "Tie!";
    } else if (capitalPlayerSelection === "Rock" && (capitalComputerSelection === "Paper")) {
        return "You lose! " + capitalComputerSelection + " beats " + capitalPlayerSelection; 
    } else if (capitalPlayerSelection === "Paper" && (capitalComputerSelection === "Scissors")) {
        return "You lose! " + capitalComputerSelection + " beats " + capitalPlayerSelection;
    } else if (capitalPlayerSelection === "Scissors" && (capitalComputerSelection === "Rock")) {
        return "You lose! " + capitalComputerSelection + " beats " + capitalPlayerSelection;
    } else {
        return "You win! " + capitalPlayerSelection + " beats " + capitalComputerSelection;
    }
}

function playGame() {
    let playerScore = 0, computerScore = 0;
    let computerSelection = getComputerChoice();
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, or scissors: ");
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.substring(0, 8) === "You win!") {
            playerScore++;
        } else if (result.substring(0, 8) === "You lose") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won! Your score (" + playerScore + ") is greater than the computer's (" + computerScore + ")! Congratulations!");
    } else if (playerScore < computerScore) {
        console.log("You lost! Your score (" + playerScore + ") is less than the computer's (" + computerScore + ")! Sorry!");
    } else {
        console.log("You " + playerScore + " tied with the computer!");
    }
}

playGame();
/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/