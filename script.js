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
    if (playerSelection === computerSelection) {
        return "Tie! " + computerSelection + " " + playerSelection;
    } else if (playerSelection === "Rock" && (computerSelection === "Paper")) {
        return "You lose! " + computerSelection + " beats " + playerSelection; 
    } else if (playerSelection === "Paper" && (computerSelection === "Scissors")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection === "Scissors" && (computerSelection === "Rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
}

function playGame() {
    let playerScore = 0, computerScore = 0;
    let computerSelection = getComputerChoice();

    const container = document.querySelector("#container");


    const buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id","buttonContainer");
    buttonContainer.classList.add("buttonContainer");
    buttonContainer.style.display = "flex";
    buttonContainer.style.width = "60%";
    buttonContainer.style.justifyContent = "space-around";
    buttonContainer.style.margin = "auto";
    container.appendChild(buttonContainer);
    const rockButton = document.createElement("button");
    rockButton.setAttribute("id","rockButton");
    rockButton.classList.add("rockButton", "buttonStyle");
    rockButton.textContent = "Rock";
    buttonContainer.appendChild(rockButton);


    const paperButton = document.createElement("button");
    paperButton.setAttribute("id", "paperButton");
    paperButton.classList.add("paperButton", "buttonStyle");
    paperButton.textContent = "Paper";
    buttonContainer.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.setAttribute("id","scissorsButton");
    scissorsButton.classList.add("scissorsButton", "buttonStyle");
    scissorsButton.textContent = "Scissors";
    buttonContainer.appendChild(scissorsButton);

    container.style.display = "flex";
    container.style.height = "100%";
    container.style.width = "100%";
    container.style.fontFamily = "Arial";
    container.style.textAlign = "center";
    container.style.padding = "20px";
    container.style.flexDirection = "column";

    let roundNumber = 1;
    let playerSelection = "";
    let result = "";
    rockButton.addEventListener("click", () => {
        playerSelection = "Rock";
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        addScore(result);
        console.log("player score = " + playerScore + " and computer score = " + computerScore);
        roundNumber++;
        computerSelection = getComputerChoice(); //get new computerChoice for next round
    });
    paperButton.addEventListener("click", () => {
        playerSelection = "Paper";
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        addScore(result);
        console.log("player score = " + playerScore + " and computer score = " + computerScore);
        roundNumber++;
        computerSelection = getComputerChoice(); //get new computerChoice for next round
    });
    scissorsButton.addEventListener("click", () => {
        playerSelection = "Scissors";
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        addScore(result);
        console.log("player score = " + playerScore + " and computer score = " + computerScore);
        roundNumber++;
        computerSelection = getComputerChoice(); //get new computerChoice for next round

    });

    function addScore(result) {
        const round = document.createElement("div");
        round.classList.add("round");
        const roundHeader = document.createElement("h4");
        roundHeader.classList.add("roundHeader");
        roundHeader.textContent = "Round " + roundNumber;
        roundHeader.style.margin = 0;
        results.appendChild(round);
        round.appendChild(roundHeader);
        const roundResults = document.createElement("div");
        round.appendChild(roundResults);
        resultsHeader.textContent = "Results";
        if (result.substring(0, 8) === "You win!") {
            playerScore++;
            roundResults.textContent = ("You win this round. " + playerSelection + " vs " + computerSelection + 
                ". Your score = " + playerScore + " and computer score = " + computerScore);
        } else if (result.substring(0, 8) === "You lose") {
            computerScore++;
            roundResults.textContent = ("You lose this round. " + playerSelection + " vs " + computerSelection + 
                ". Your score = " + playerScore + " and computer score = " + computerScore);
        } else if (result.substring(0, 4) === "Tie!") {
            roundResults.textContent = ("Tie! " + playerSelection + " vs " + computerSelection 
                + ". Your score = " + playerScore + " and computer score = " + computerScore);
        }

        if (playerScore >= 5) {
            const endResult = document.createElement("h3");
            endResult.textContent = "You win the game!";
            roundResults.appendChild(endResult);
        } else if (computerScore >= 5) {
            const endResult = document.createElement("h2");
            endResult.textContent = "You lose the game!";
            roundResults.appendChild(endResult);
        }
        if (playerScore >= 5 || computerScore >= 5) {
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;

            const newGame = document.createElement("div");
            newGame.classList.add("newGame");
            const newGameHeader = document.createElement("h3");
            newGameHeader.textContent = "Do you want to play a new game?";
            results.appendChild(newGame);
            newGame.appendChild(newGameHeader);

            const newGameButtonContainer = document.createElement("div");
            newGameButtonContainer.style.display = "flex";
            newGameButtonContainer.style.width = "100%";
            newGameButtonContainer.style.justifyContent = "space-around";
            newGameButtonContainer.classList.add("newGameButtonContainer");
            newGame.appendChild(newGameButtonContainer);

            const newGameButtonYes = document.createElement("button");
            newGameButtonYes.classList.add("newGameButtonYes", "buttonStyle");
            newGameButtonYes.setAttribute("id","newGameButtonYes")
            newGameButtonYes.textContent = "Yes";
            newGameButtonContainer.appendChild(newGameButtonYes);
            newGameButtonYes.style.margin = 20;
            const newGameButtonNo = document.createElement("button");
            newGameButtonNo.classList.add("newGameButtonNo", "buttonStyle");
            newGameButtonNo.setAttribute = "newGameButtonNo";
            newGameButtonNo.textContent = "No";
            newGameButtonContainer.appendChild(newGameButtonNo);

            newGameButtonNo.addEventListener("click", () => {
                newGameButtonNo.disabled = true;
                newGameButtonYes.disabled = true;
                const thankYou = document.createElement("div");
                thankYou.classList.add("thankYou");
                newGame.appendChild(thankYou);
                const thankYouHeader = document.createElement("h3");
                thankYouHeader.textContent = "Thank you for playing!";
                thankYou.appendChild(thankYouHeader);
            });

            newGameButtonYes.addEventListener("click", () => {
                while (results.hasChildNodes()) {
                    results.removeChild(results.firstChild);
                }
                roundNumber = 1;
                computerScore = 0;
                playerScore = 0;
                rockButton.disabled = false;
                paperButton.disabled = false;
                scissorsButton.disabled = false;
                const resultsHeader = document.createElement("h3");
                resultsHeader.textContent = "Results";
                container.appendChild(results);
                results.appendChild(resultsHeader);
            });
        }
    }
    const results = document.createElement("div");
    results.classList.add("results");
    const resultsHeader = document.createElement("h3");
    container.appendChild(results);
    results.appendChild(resultsHeader);
}

function format() {
    let h1 = document.getElementsByTagName("h1")[0];
    h1.style.textAlign = "center";
    h1.style.fontFamily = "Arial";
}

format();
playGame();

/*
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/