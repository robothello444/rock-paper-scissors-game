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

// Button selection
const btnChoice = document.querySelectorAll("div.btn-container");
btnChoice.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id);
    });
});

// Scores
let humanScore = 0;
let computerScore = 0;
var roundWinner = "";

// Selectors
const winnerContainer = document.querySelector(".game-winner");
const roundWinnerContainer = document.querySelector(".round-winner");
const playerChoiceContainer = document.querySelector(".player-choice-container");
const computerChoiceContainer = document.querySelector(".computer-choice-container");
const roundResultsContainer = document.querySelector(".round-results");

// Clear results
function clearResults() {
    if (humanScore == 5 || computerScore == 5) {
        humanScore = 0;
        computerScore = 0;
        winnerContainer.textContent =``;
    };  
};

function playGame(btnSelected) {
    var humanSelection = btnSelected;
    var computerSelection = getComputerChoice();
    // console.log(`Debug - Computer choice: ${computerSelection}`); // Debug
    // console.log(`Debug - Human choice : ${humanSelection}`); // Debug;
    function playRound(humanChoice, computerChoice) {
        switch (humanChoice + " " + computerChoice) {
            // Win cases
            case "rock scissors":
            console.log("You win! Rock beats Scissors"); // Debug
            roundWinner = "You win! Rock beats Scissors";
            humanScore++;
            break;

            case "paper rock":
            console.log("You win! Paper beats Rock"); // Debug
            roundWinner = "You win! Paper beats Rock";
            humanScore++;
            break;

            case "scissors paper":
            console.log("You win! Scissors beats Paper"); // Debug
            roundWinner = "You win! Scissors beats Paper";
            humanScore++;
            break;
            
            // Lose cases
            case "paper scissors":
            console.log("You lose! Scissors beats Paper"); // Debug
            roundWinner = "You lose! Scissors beats Paper";
            computerScore++
            break;

            case "scissors rock":
            console.log("You lose! Rock beats Scissors"); // Debug
            roundWinner = "You lose! Rock beats Scissors";
            computerScore++
            break;

            case "rock paper":
            console.log("You lose! Paper beats Rock"); // Debug
            roundWinner = "You lose! Paper beats Rock";
            computerScore++
            break;
            
            default:
            console.log("Draw!"); // Debug
            roundWinner = "Draw!";
            break;
        };
    };
    clearResults(); // Check to clear results
    playRound(humanSelection, computerSelection);
    
    // Round score results
    roundResultsContainer.textContent = `You: ${humanScore}  Computer: ${computerScore}`;

    // Detect score and winner
    roundWinnerContainer.textContent = roundWinner;
    if (humanScore == 5) {
        // console.log("You win!"); // Debug
        winnerContainer.textContent =`You win!`;
    } else if (computerScore == 5) {
        // console.log("You lose! Computer wins."); // Debug
        winnerContainer.textContent = `You lose! Computer wins.`
    };

    // Show round choices
    playerChoiceContainer.textContent = `Your choice: ${humanSelection}`;
    computerChoiceContainer.textContent = `Computer choice: ${computerSelection}`;
};

