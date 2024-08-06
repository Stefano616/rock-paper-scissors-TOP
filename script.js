const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanInput = prompt("Rock, paper or scissors?", "rock").toLowerCase().trim();
  return humanInput;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(computerChoice, humanChoice) {
    console.log("Computer: " + computerChoice + "\nHuman: " + humanChoice);
    switch (computerChoice) {
      case "rock":
        if (humanChoice === "paper") {
          console.log("Paper beats rock! You win");
          humanScore++;
        } else if (humanChoice === "scissors") {
          console.log("Rock beats scissors! You lose");
          computerScore++;
        } else if (humanChoice === "rock") {
          console.log("Rock vs rock! The round is even!");
        } else {
          console.log("Please, enter a valid choice.");
        }
        break;
      case "scissors":
        if (humanChoice === "paper") {
          console.log("Scissors beats paper! You lose");
          computerScore++;
        } else if (humanChoice === "rock") {
          console.log("Rock beats scissors! You win");
          humanScore++;
        } else if (humanChoice === "scissors") {
          console.log("Scissors vs scissors! The round is even!");
        } else {
          console.log("Please, enter a valid choice.");
        }
        break;
      case "paper":
        if (humanChoice === "rock") {
          console.log("Paper beats rock! You lose");
          computerScore++;
        } else if (humanChoice === "scissors") {
          console.log("Scissors beats paper! You win");
          humanScore++;
        } else if (humanChoice === "paper") {
          console.log("Paper vs paper! The round is even!");
        } else {
          console.log("Please, enter a valid choice.");
        }
        break;
    }
  }
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice(choicesArray);
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("You lose the game. Retry!");
  } else {
    console.log("The game is even!");
  }
}

playGame();
