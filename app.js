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

let playerScore = 0;
let computerScore = 0;

function update(e) {
    const result = document.querySelector('#result');
    const score = document.querySelector('#score');
    result.textContent = playRound(this.querySelector('p').textContent, computerPlay());
    if (result.textContent.charAt(4) == 'l') {
        computerScore++;
    }
    else if (result.textContent.charAt(4) == 'w') {
        playerScore++;
    }
    score.textContent = `The score is ${playerScore} to ${computerScore}`;
    if (playerScore >= 5) {
        score.textContent = "Congratulations for winning!";
        endGame();
        return;
    }
    else if (computerScore >= 5) {
        score.textContent = "You lost! Oh no.";
        endGame();
        return;
    }
}

const choices = document.querySelectorAll('.choice');

// removes the event listeners
function endGame() {
    choices.forEach(choice => choice.removeEventListener('click', update));
    choices.forEach(choice => choice.removeEventListener('mouseover', animate));
    choices.forEach(choice => choice.removeEventListener('mouseout', stopAnimate));
    choices.forEach(choice => choice.classList.remove('hovering'));
}

function animate(e) {
    this.classList.add('hovering');
}

function stopAnimate(e) {
    this.classList.remove('hovering');
}

choices.forEach(choice => choice.addEventListener('click', update));
choices.forEach(choice => choice.addEventListener('mouseover', animate));
choices.forEach(choice => choice.addEventListener('mouseout', stopAnimate));
