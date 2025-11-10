function getComputerChoice(){
    while (true){
       var randomNum = Math.random();
        if (randomNum <= 0.3){
        return "rock";
        }   else if (randomNum <= 0.6) {
            return "paper";
        }   else {
            return "scissors";
        } 
    }
}

function getHumanChoice() {
    var userChoice = prompt('Write rock, paper or scissors')
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice + " " + computerChoice) {
        // Win cases
        case "rock scissors":
        console.log("You win! Rock beats scissors");
        humanScore++
        break;

        case "paper rock":
        console.log("You win! Paper beats rock");
        humanScore++
        break;

        case "scissors paper":
        console.log("You win! Scissors beats paper");
        humanScore++
        break;
        
        // Losing Cases
        case "paper scissors":
        console.log("You lose! Scissors beats paper!");
        computerScore++
        break;

        case "scissors rock":
        console.log("You lose! Rock beats scissors!");
        computerScore++
        break;

        case "rock paper":
        console.log("You lose! Paper beats rock!");
        computerScore++
        break;
        
        default:
        console.log("Draw!");
        break;
    }
}

var humanScore = 0;
var computerScore = 0;

function playGame() {
    var humanSelection = getHumanChoice();
    var computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
}

playGame();
playGame();
playGame();
playGame();
playGame();