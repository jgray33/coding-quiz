// Elements ===================================================
const userName = document.getElementById("username");
const saveScoreBttn = document.getElementById("saveScoreBttn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const playAgain = document.getElementById("play-again");
const viewScoreBoard = document.getElementById("viewScoreBoardBttn");
const highScores = JSON.parse(localStorage.getItem("highScores"));

let userInitials;
let scoreArr = [];
let maxScores = [];

// Brings the user's score onto this page
finalScore.innerText = mostRecentScore;

// Prevents the form refreshing
saveHighScore = (e) => {
  console.log("clicked save");
  e.preventDefault();
};


// Saves the score into local storage ===================================================
saveScoreBttn.addEventListener("click", () => {
  userInitials = userName.value;
  const score = {
    score: mostRecentScore,
    name: userInitials,
  };
  scoreArr.push(score);
  localStorage.setItem("highScores", JSON.stringify(scoreArr));
});

// Sort the array from highest to lowest
highScores.sort((a, b) => {
  return b.score - a.score;
});

// Only show the top five scores 
highScores.splice(5);
localStorage.setItem("highScores", JSON.stringify(highScores));

// Buttons linked to other pages ===================================================
playAgain.addEventListener("click", () => {
  return window.location.assign("/index.html");
});

viewScoreBoard.addEventListener("click", () => {
  return window.location.assign("/scoreboard.html");
});
