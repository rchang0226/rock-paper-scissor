function computerPlay() {
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection.toLowerCase()) {
        case "rock":
            switch(computerSelection) {
                case "rock":
                    return "It's a tie!";
                case "paper":
                    return "You lose! Paper beats rock";
                case "scissors":
                    return "You win! Rock beats scissors";
            }
        case "paper":
            switch(computerSelection) {
                case "rock":
                    return "You win! Paper beats rock!";
                case "paper":
                    return "It's a tie!";
                case "scissors":
                    return "You lose! Scissors beats paper";
            }
        case "scissors":
            switch(computerSelection) {
                case "rock":
                    return "You lose! Rock beats scissors";
                case "paper":
                    return "You win! Scissors beats paper";
                case "scissors":
                    return "It's a tie!"
            }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What's your choice?")
        let result = playRound(playerSelection, computerPlay())
        if (result.charAt(4) == 'l') {
            computerScore++;
        }
        else if (result.charAt(4) == 'w') {
            playerScore++;
        }
        console.log(result)
        console.log(`The score is ${playerScore} to ${computerScore}`)
        if (playerScore >= 3) {
            console.log("Congratulations for winning!");
            return;
        }
        else if (computerScore >= 3) {
            console.log("You lost! Oh no.");
            return;
        }
    }
    if (playerScore > computerScore) {
        console.log("Congratulations for winning!");
    } 
    else if (computerScore > playerScore) {
        console.log("You lost! Oh no.");
    }
    else {
        console.log("Wow, it's a draw!");
    }
}

game()
