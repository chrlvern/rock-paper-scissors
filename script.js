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

function playRound(){
    let playerChoice = prompt("Choose Rock Paper or Scissors").toLowerCase();
    let computerChoice = getComputerChoice();

    if(computerChoice == "Rock"){
        switch (playerChoice) {
            case "rock":
                console.log("It's a Tie!");
                break;
            case "paper":
                console.log("Point to you! Paper beats Rock!");
                return "Player";
                break;
            case "scissors":
                console.log("Rock beats Scissors! My point!");
                return "Computer";
                break;
        }
    }
    else if(computerChoice == "Paper"){
        switch (playerChoice) {
            case "rock":
                console.log("Paper beats Rock! My point!");
                return "Computer";
                break;
            case "paper":
                console.log("It's a tie!");
                break;
            case "scissors":
                console.log("Point to you! Scissors beats Paper!");
                return "Player";
                break;
        }
    }
    else{
        switch (playerChoice) {
            case "rock":
                console.log("Point to you! Rock beats Scissors!");
                return "Player";
                break;
            case "paper":
                console.log("Scissors beats Paper! My point!");
                return "Computer";
                break;
            case "scissors":
                console.log("It's a tie!");
                break;
        }
    }

    return 
}

function game(){
    let playerScore = 0
    let computerScore = 0
    let result;
    for(let i = 0; i < 5; i++){
        result = playRound();
        if(result == "Player"){
            playerScore++;
        }
        else if(result == "Computer"){
            computerScore++;
        }
    }

    console.log(playerScore);
    if(playerScore > computerScore){
        console.log("You Win! You're score is " + playerScore)
    }
    else if(playerScore < computerScore){
        console.log("You Lose...better luck next time")
    }
    else{
        console.log("It's a Tie! Try Again?")
    }
}

game();