const userName = document.getElementById("username")
const saveScoreBttn = document.getElementById("saveScoreBttn")
const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const playAgain = document.getElementById("play-again")
let userInitials;

let scoreArr = []
// Convert the local storage into an array
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores)

// Brings the user's score onto this page
finalScore.innerText = mostRecentScore

// // Recognises typing in the username input
// userName.addEventListener("keyup", () => {
//         })



// When press on save button, score is saved
saveHighScore = (e) => {
    console.log("clicked save");
    e.preventDefault();
}

// Play again links back to start page 
playAgain.addEventListener("click", () => {
    return window.location.assign("/index.html")
})


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
// for loop of scorrArr < dispaly that .


