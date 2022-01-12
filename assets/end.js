const userName = document.getElementById("username")
const saveScoreBttn = document.getElementById("saveScoreBttn")
const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const playAgain = document.getElementById("play-again")
let userInitials;
let scoreArr = []
let maxScores = []

const highScores = JSON.parse(localStorage.getItem("highScores"))

// Brings the user's score onto this page
finalScore.innerText = mostRecentScore


// Prevents the form refreshing 
saveHighScore = (e) => {
    console.log("clicked save");
    e.preventDefault();
}

// 
saveScoreBttn.addEventListener("click", () => {
    userInitials = userName.value
    const score = {
        score: mostRecentScore,
        name: userInitials
      }
      console.log(score)
      scoreArr.push(score)
      localStorage.setItem("highScores", JSON.stringify(scoreArr))
})


// Sort the array from highest to lowest
highScores.sort((a,b) => {
    return b.score -a.score;
    })

highScores.splice(5)
localStorage.setItem("highScores", JSON.stringify(highScores));

// Play again links back to start page 
playAgain.addEventListener("click", () => {
    return window.location.assign("/index.html")
})