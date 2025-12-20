function getComputerChoice(){
    var randomNum = Math.random();
    if (randomNum <= 0.33){
    return "rock";
    }   else if (randomNum <= 0.66) {
        return "paper";
    }   else {
        return "scissors";
    }; 
};

function getHumanChoice() {
    var userChoice = prompt('Write rock, paper or scissors').toLowerCase();
    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors" ) {
        return userChoice;
    } else {
        alert("Incorrect option, choose again.");
        getHumanChoice();
    }
};

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++){
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        
        function playRound(humanChoice, computerChoice) {
            switch (humanChoice + " " + computerChoice) {
                // Win cases
                case "rock scissors":
                console.log("You win! Rock beats Scissors");
                humanScore++;
                break;

                case "paper rock":
                console.log("You win! Paper beats Rock");
                humanScore++;
                break;

                case "scissors paper":
                console.log("You win! Scissors beats Paper");
                humanScore++;
                break;
                
                // Lose cases
                case "paper scissors":
                console.log("You lose! Scissors beats Paper");
                computerScore++
                break;

                case "scissors rock":
                console.log("You lose! Rock beats Scissors");
                computerScore++
                break;

                case "rock paper":
                console.log("You lose! Paper beats Rock");
                computerScore++
                break;
                
                default:
                console.log("Draw!");
                break;
            };
        };
        
        playRound(humanSelection, computerSelection);
        
        console.log(`You: ${humanScore}     Computer: ${computerScore}`)
    };

    var results = "";
    if (humanScore > computerScore) {
        results += "You win!";
    } else {
        results += "You lose!";
    };
    console.log(`${results} \n\You: ${humanScore}     Computer: ${computerScore}`);
};

playGame();