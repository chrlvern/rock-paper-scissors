let playerScore = 0;
let computerScore = 0;
let result;

let player = document.querySelector('.player');
let computer = document.querySelector('.computer');
let title = document.querySelector('.title');
let buttons = document.querySelectorAll('button');

function disableButton(){
    document.querySelectorAll('button').forEach(el => el.setAttribute('disabled', true));
}
function getComputerChoice(){
    choice = Math.floor(Math.random() * 4);
    if(choice == 1){
        return "Rock";
    }
    else if(choice == 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playerSelection(e){
    let choice = e.target.className;
    result = playRound(choice);

    if(result == "Player"){
        playerScore++;
        player.textContent = playerScore;
    }
    else if(result == "Computer"){
        computerScore++;
        computer.textContent =computerScore;
    }

    if(playerScore == 5){
        title.textContent = "You Win! You're score is " + playerScore;
        disableButton();
    }
    else if(computerScore == 5){
        title.textContent = "You Lose...better luck next time";
        disableButton();
    }
}

function playRound(choice){
    let playerChoice = choice.toLowerCase();
    let computerChoice = getComputerChoice();

    if(computerChoice == "Rock"){
        switch (playerChoice) {
            case "rock":
                title.textContent = "It's a Tie!";
                break;
            case "paper":
                title.textContent = "Point to you! Paper beats Rock!";
                return "Player";
                break;
            case "scissors":
                title.textContent = "Rock beats Scissors! My point!";
                return "Computer";
                break;
        }
    }
    else if(computerChoice == "Paper"){
        switch (playerChoice) {
            case "rock":
                title.textContent = "Paper beats Rock! My point!";
                return "Computer";
                break;
            case "paper":
                title.textContent = "It's a tie!";
                break;
            case "scissors":
                title.textContent = "Point to you! Scissors beats Paper!";
                return "Player";
                break;
        }
    }
    else{
        switch (playerChoice) {
            case "rock":
                title.textContent = "Point to you! Rock beats Scissors!";
                return "Player";
                break;
            case "paper":
                title.textContent = "Scissors beats Paper! My point!";
                return "Computer";
                break;
            case "scissors":
                title.textContent = "It's a tie!";
                break;
        }
    }

    return 
}

window.addEventListener('click', playerSelection);
