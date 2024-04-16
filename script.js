function getComputerChoice() {
    let sample = ["Rock", "Paper", "Scissors"];
    return sample[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    p = playerSelection.toLowerCase();
    c = computerSelection.toLowerCase();
    console.log(`Your choice: ${p} \nComputer's choice: ${c}`);
    if (c === "rock") {
        if (p === "rock") {
            return "Tie!";
        } else if (p === "paper") {
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Rock beats paper";
        }
    } else if (c === "scissors") {
        if (p === "scissors") {
            return "Tie";
        } else if (p === "rock") {
            return "You win! Rock beats scissors!";
        } else {
            return "You lose! Scissors beats paper";
        }
    } else {
        if (p === "paper") {
            return "Tie";
        } else if (p === "scissors") {
            return "You win! Scissors beats paper!";
        } else {
            return "You lose! Paper beats rock";
        }
    }
}

function playGame() {
    let playerScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, scissors?");
        result = playRound(playerChoice, getComputerChoice());
        if (result.includes("win")) {
            playerScore += 1;
        } else if (result.includes("lose")) {
            compScore += 1;
        }
        console.log(result);
    }
    console.log(`Your score: ${playerScore} \nComputer's score: ${compScore}`);

    if (playerScore > compScore) {
        console.log("You are the winner!");
    } else if (compScore > playerScore) {
        console.log("The computer won :(");
    }
}

console.log(playGame());