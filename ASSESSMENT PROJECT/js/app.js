// VARIABLES

// Buttons
let button0 = document.getElementById("button0");

// Texts
let playerRollText = document.getElementById("playerRollText");
let aiRollText = document.getElementById("aiRollText");
let resultText = document.getElementById("result");
let playerScoreText = document.getElementById("playerScoreText");
let aiScoreText = document.getElementById("aiScoreText");


//Data
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;

// PROCESSES
button0.addEventListener("click", function() {
  playerRoll = getRandomNumberOneToSixForPlayer();
  aiRoll = getRandomNumberOneToSixForaI();
  showPlayerRollResult();
  showAIRollResult();
  compareRolls();
});


// CONTROLLERS
function getRandomNumberOneToSixForPlayer() {
  return Math.floor(Math.random() * 6) + 1;
}
function getRandomNumberOneToSixForaI() {
  return Math.floor(Math.random() * 6) + 1;
}
function compareRolls() {
  if (playerRoll > aiRoll) {
    showText("Player Wins!");
    playerScore++;
  } else if (playerRoll < aiRoll) {
    showText("AI Wins!");
    aiScore++;
  } else {
    showText("It's a Draw!");
  }

// Update the scores
  playerScoreText.innerText = "Player Score: " + playerScore;
  aiScoreText.innerText = "AI Score: " + aiScore;
}

// VIEWS
  function showPlayerRollResult() {
    playerRollText.innerHTML = "Player:" + playerRoll;
  }

  function showAIRollResult() {
    aiRollText.innerHTML = "AI:" + aiRoll;
  }

  function showText(result){
  resultText.innerHTML = result;
}
