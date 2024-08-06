const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice(choices) {
  let userInput = Number(prompt("for rock - enter 0; for paper - enter 1; for scissors - enter 2", 0));
  return choices[userInput];
}

console.log("Computer: " + getComputerChoice(choicesArray));
console.log("User: " + getHumanChoice(choicesArray));
