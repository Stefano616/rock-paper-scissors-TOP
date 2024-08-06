const choicesArray = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
  let randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

console.log(getComputerChoice(choicesArray));
