function getComputerChoice() {
    let sample = ["rock", "paper", "scissors"];
    return sample[Math.floor(Math.random() * 3)];
}

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

const body = document.querySelector("body");

rockButton.textContent = "Rock";
document.body.appendChild(rockButton);
paperButton.textContent = "Paper";
document.body.appendChild(paperButton);
scissorsButton.textContent = "Scissors";
document.body.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

const div = document.createElement("div");
document.body.appendChild(div);

let playerScore = 0;
let compScore = 0;
let playerScoreElem = document.createElement("p");
playerScoreElem.textContent = `Player Score: ${playerScore}`;
div.appendChild(playerScoreElem);

let compScoreElem = document.createElement("p");
compScoreElem.textContent = `Computer Score: ${compScore}`;
div.appendChild(compScoreElem);

const rulesElem = document.createElement("p");
rulesElem.textContent = "The game is over when one player reaches 5 points."
div.insertBefore(rulesElem, playerScoreElem);

let gameNumber = 0;

function playRound(playerSelection, computerSelection) {
    gameNumber += 1;
    const roundResult = document.createElement("p");
    roundResult.textContent = `[Game ${gameNumber}] You: ${playerSelection}, Computer: ${computerSelection} `;
    div.appendChild(roundResult);

    if (computerSelection === "rock") {
        if (playerSelection === "rock") {
            roundResult.textContent += "=> Tie!";
        } else if (playerSelection === "paper") {
            playerScore += 1;
            playerScoreElem.textContent = `Player Score: ${playerScore}`;
            roundResult.textContent += "=> You win!";
        } else {
            compScore += 1;
            compScoreElem.textContent = `Computer Score: ${compScore}`;
            roundResult.textContent += "=> You lose!";
        }
    } else if (computerSelection === "scissors") {
        if (playerSelection === "scissors") {
            roundResult.textContent += "=> Tie";
        } else if (playerSelection === "rock") {
            playerScore += 1;
            playerScoreElem.textContent = `Player Score: ${playerScore}`;
            roundResult.textContent += "=> You win!";
        } else {
            compScore += 1;
            compScoreElem.textContent = `Computer Score: ${compScore}`;
            roundResult.textContent += "=> You lose!";
        }
    } else {
        if (playerSelection === "paper") {
            roundResult.textContent += "=> Tie";
        } else if (playerSelection === "scissors") {
            playerScore += 1;
            playerScoreElem.textContent = `Player Score: ${playerScore}`;
            roundResult.textContent += "=> You win!";
        } else {
            compScore += 1;
            compScoreElem.textContent = `Computer Score: ${compScore}`;
            roundResult.textContent += "=> You lose!";
        }
    }

    if (checkFiveGames()) {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    };
}

function checkFiveGames() {
    if (playerScore == 5 || compScore == 5) {
        const resultElem = document.createElement("p");
        if (playerScore > compScore) {
            resultElem.textContent = "Congrats! You are the winner!";
        } else if (compScore > playerScore) {
            resultElem.textContent = "The computer won :(";
        }
        div.appendChild(resultElem);
        return true;
    }
}