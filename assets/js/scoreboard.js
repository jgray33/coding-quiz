const highScoresList = document.getElementById("highscoresList")
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const  playAgain = document.getElementById("playAgainBttn")

console.log(highScores)

// Takes high scores array and converts each array item into something new
highScoresList.innerHTML = highScores

.map(score => {
   return `<li class="high-scores"> ${score.name} - ${score.score}</li>`
})
.join("")

playAgain.addEventListener("click", () => {
   return window.location.assign("/index.html")
})