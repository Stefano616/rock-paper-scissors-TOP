const choicesArray = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultDiv = document.querySelector("#roundResults");
const gameResults = document.querySelector('#gameResults');

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  let humanInput = prompt("Rock, paper or scissors?", "rock").toLowerCase().trim();
  return humanInput;
}



function checkWinner(){
  if (humanScore === 5) {
    return "Player win the game!";
  } else if (computerScore === 5) {
    return "Computer win the game. Retry!";
  } else {
    return false;
  }
} 
function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(computerChoice, humanChoice) {
  resultDiv.textContent = 
    `Computer: ${computerChoice} 

     Human: ${humanChoice}

    `;
  switch (computerChoice) {
    case "rock":
      if (humanChoice === "paper") {
          resultDiv.textContent += `Paper beats rock! You win`;
          humanScore++;
      } else if (humanChoice === "scissors") {
          resultDiv.textContent += `Rock beats scissors! You lose`;
          computerScore++;
      } else if (humanChoice === "rock") {
          resultDiv.textContent += `Rock vs rock! The round is even!`;
      } else {
          resultDiv.textContent += `Please, enter a valid choice.`;
      }
    break;
    case "scissors":
      if (humanChoice === "paper") {
          resultDiv.textContent += `Scissors beats paper! You lose`;
          computerScore++;
        } else if (humanChoice === "rock") {
          resultDiv.textContent += `Rock beats scissors! You win`;
          humanScore++;
      } else if (humanChoice === "scissors") {
          resultDiv.textContent += `Scissors vs scissors! The round is even!`;
      } else {
          resultDiv.textContent += `Please, enter a valid choice.`;
      }
    break;
    case "paper":
      if (humanChoice === "rock") {
          resultDiv.textContent += `Paper beats rock! You lose`;
          computerScore++;
      } else if (humanChoice === "scissors") {
          resultDiv.textContent += `Scissors beats paper! You win`;
          humanScore++;
      } else if (humanChoice === "paper") {
          resultDiv.textContent += `Paper vs paper! The round is even!`;
      } else {
          resultDiv.textContent += `Please, enter a valid choice.`;
      }
    break;
  } 
}
  document.addEventListener('click', (e)=>{
    const computerSelection = getComputerChoice(choicesArray);
    const playerSelection = e.target.value;

    playRound(computerSelection, playerSelection);
    gameResults.textContent = `Player score: ${humanScore}. 
    Computer score: ${computerScore} `;

    if(checkWinner()) {
      gameResults.textContent += checkWinner();
    }

    return e.target.value;
    }
  );  
}

playGame();
