// Elements ==========================================================
const highScoresList = document.getElementById("highscoresList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const  playAgain = document.getElementById("playAgainBttn")
const clearScoreBoard = document.getElementById("clearScores")


// Takes high scores array and converts each array item into something new
highScoresList.innerHTML = highScores

.map(score => {
   return `<li class="high-scores"> ${score.name} - ${score.score}</li>`
})
.join("")

// ========================== Link added to play again
playAgain.addEventListener("click", () => {
   return window.location.assign("/index.html")
})


clearScoreBoard.addEventListener("click", () => {
   localStorage.clear();
   highScoresList.innerHTML = ""
 });
 