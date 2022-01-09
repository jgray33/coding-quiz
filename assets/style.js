console.log("is this connected");

const submitBttn = document.getElementById("submit-button");
let choiceA = document.getElementById("op1");
let choiceB = document.getElementById("op2");
let choiceC = document.getElementById("op3");
let choiceD = document.getElementById("op4");
let questionInstr = document.getElementById("questionInstr");
let CurrentScore = document.getElementById("score");

// Timer
var timerEl = document.querySelector(".timer");

var secondsLeft = 100;

function quizFinished() {

}

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Timer has ended");
      quizFinished()
    }
  }, 1000);
}

// When submit button is clicked, the timer will start
submitBttn.addEventListener("click", () => {
  setTimer();
});

// When the start button is clicked, it will disappear
const changeBttn = () => submitBttn.classList.add("invisible");

// When the start button is clicked, the first question appears
submitBttn.addEventListener("click", () => {
  displayQuestion();
});

// List of questions
let questionsList = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<scripting>",
    b: "<js>",
    c: "<javascript>",
    d: "<script>",
    correctAnswer: "d",
  },

  {
    question: "What is the correct place to insert a JavaScript?",
    a: "Either the <head> section or the <body> section",
    b: "The <p> section",
    c: "The <body> section",
    d: "In the CSS worksheet",
    correctAnswer: "a",
  },

  {
    question: "How do you write 'Hello world' in an alert box?",
    a: "alert('Hello World')",
    b: "msg('Hello World')",
    c: "msgBox('Hello World')",
    d: "alertBox('Hello World')",
    correctAnswer: "a",
  },
];

let lastQuestionIndex = questionsList.length - 1;
let runningQuestionsIndex = 0;

let userAnswer = ""

var choiceAclick = false
choiceA.addEventListener("click", function(){
    choiceAclick = true
    userAnswer = "a"
    console.log("user has selected " + userAnswer)
})

var choiceBclick = false
choiceB.addEventListener("click", function(){
    choiceBclick = true
    userAnswer = "b"
    console.log("user has selected " + userAnswer)
})

var choiceCclick = false
choiceC.addEventListener("click", function(){
    choiceCclick = true
    userAnswer = "c"
    console.log("user has selected " + userAnswer)
})

var choiceDclick = false
choiceD.addEventListener("click", function(){
    choiceDclick = true
    userAnswer = "d"
    console.log("user has selected " + userAnswer)
})





// Call the questions
function displayQuestion() {
  let q = questionsList[runningQuestionsIndex];
  questionInstr.innerHTML = "<p>" + q.question + "</p>";
  choiceA.textContent = q.a;
  choiceB.textContent = q.b;
  choiceC.textContent = q.c;
  choiceD.textContent = q.d;
        }
 

 let score = 0;
function checkAnswer() {
  if (questionsList[runningQuestionsIndex].correctAnswer === userAnswer) {
    score++;
  } else {
    score--;
  }
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
  }
  console.log("The current score is " + score);
  CurrentScore.innerHTML = score;
}

submitBttn.addEventListener("click", () => {
  changeBttn();
});

// 1. The user presses start quiz
//  a. The timer begins to count down from 100
//  b. The questions appear
// 2. The user selects their answer
//  a. If the correct answer is chosen, "correct" will appear and timer will stay the same
//  b. If the wrong answer is chosen, "incorrect" will appear and timer will decrease by two
//  c. Next question button appears
// 3. User selects next questions and function 1b - 2c is repeated until the timer runs our OR the questions end
// 4. Quiz finishes
//  a. Score is shown
//  b. User enters their name into the score board and press submit
// 6. Score Board is shown
// 7. Try again or show scoreboard

// To do:
// Build questions
// Initial HTML should be start, instructions and start quiz button
// On click of start button, questions appear (Hidden to start with and
// javascript visible on click?)
// Create timer that counts down from 100
// Function on questions: If answer right, textContent "Correct" and
// visible? If answer wrong, textContent "incorrect" turns visible,
// AND two comes off the timer.
// When the questions run out, the high score is returned and the
// form is returned.
