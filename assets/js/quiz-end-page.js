// Elements ===================================================
const userName = document.getElementById("username");
const saveScoreBttn = document.getElementById("saveScoreBttn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const playAgain = document.getElementById("play-again");
const viewScoreBoard = document.getElementById("viewScoreBoardBttn");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let userInitials;
let maxScores = 5;
console.log(highScores)

// Brings the user's score onto this page
finalScore.innerText = mostRecentScore;

// Saves the score into local storage ===================================================
// First prevents the form refreshing
saveHighScore = (e) => {
  console.log("clicked save");
  e.preventDefault();
  const userInitials = userName.value;
  const NewScore = {
    score: mostRecentScore,
    name: userInitials,
  };
  highScores.push(NewScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  console.log(highScores)
  scoreBoard();
};

// Sort the array from highest to lowest
highScores.sort((a, b) => {
  return b.score - a.score;
});

// Only show the top five scores 
highScores.splice(5);
localStorage.setItem("highScores", JSON.stringify(highScores));
console.log(highScores)

// Buttons linked to other pages ===================================================
playAgain.addEventListener("click", () => {
  return window.location.assign("/index.html");
});

function scoreBoard() {
  return window.location.assign("/html/scoreboard.html");
}

viewScoreBoard.addEventListener("click", () => {
  return window.location.assign("/html/scoreboard.html");
});


