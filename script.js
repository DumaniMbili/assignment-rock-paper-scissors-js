function computerPlay() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const playerSelectionLower = playerSelection.toLowerCase();
  const computerSelectionLower = computerSelection.toLowerCase();

  if (!["rock", "paper", "scissors"].includes(playerSelectionLower)) {
    return "invalid";
  }

  if (playerSelectionLower === computerSelectionLower) {
    return "tie";
  } else if (
    (playerSelectionLower === "rock" &&
      computerSelectionLower === "scissors") ||
    (playerSelectionLower === "paper" && computerSelectionLower === "rock") ||
    (playerSelectionLower === "scissors" && computerSelectionLower === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter Rock, Paper, or Scissors:");
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    if (result === "invalid") {
      console.log("Invalid input. Please enter Rock, Paper, or Scissors.");
      i--; // decrement i so that the current round is replayed
    } else if (result === "tie") {
      console.log(`It's a tie! You both chose ${playerSelection}.`);
    } else if (result === "win") {
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
    console.log(`Score: ${playerScore} - ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("You lose the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();
