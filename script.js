let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();
  if (
    (playerSelectionLower === "rock" &&
      computerSelectionLower === "scissors") ||
    (playerSelectionLower === "paper" && computerSelectionLower === "rock") ||
    (playerSelectionLower === "scissors" && computerSelectionLower === "paper")
  ) {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
  } else if (
    (playerSelectionLower === "rock" && computerSelectionLower === "paper") ||
    (playerSelectionLower === "paper" &&
      computerSelectionLower === "scissors") ||
    (playerSelectionLower === "scissors" && computerSelectionLower === "rock")
  ) {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
  } else {
    console.log(`It's a tie! You both chose ${playerSelection}.`);
  }
  console.log(`Score: ${playerScore} - ${computerScore}`);
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      console.log(`You win the game!`);
    } else {
      console.log(`You lose the game!`);
    }
    playerScore = 0;
    computerScore = 0;
  }
}

// Prompt the user for input
const playerSelection = prompt("Enter Rock, Paper, or Scissors:");

// Play a round with the user's selection and the computer's selection
playRound(playerSelection, computerPlay());
