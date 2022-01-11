const userName = document.getElementById("name")
const saveScoreBttn = document.getElementById("saveScoreBttn")
const finalScore = document.getElementById("finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const playAgain = document.getElementById("play-again")
console.log(playAgain)

finalScore.innerText = mostRecentScore

userName.addEventListener("keyup", () => {
    console.log(userName.value)
})

saveScore = e => {
    console.log("clicked save");
    e.preventDefault();
}

playAgain.addEventListener("click", () => {
    return window.location.assign("/index.html")
})
