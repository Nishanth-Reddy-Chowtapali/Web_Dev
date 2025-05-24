const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compueterDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const compueterChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === compueterChoice) {
    result = "IT's A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = compueterChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = compueterChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = compueterChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  compueterDisplay.textContent = `COMPUTER: ${compueterChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}
