// Elements ===================================================
let choiceA = document.getElementById("op1");
let choiceB = document.getElementById("op2");
let choiceC = document.getElementById("op3");
let choiceD = document.getElementById("op4");
let options = document.getElementById("choice-box");
let timerEl = document.querySelector(".timer");
let questionTitle = document.getElementById("title");
let CurrentScore = document.getElementById("score");
let correctResult = document.getElementById("correct-result");
let incorrectResult = document.getElementById("incorrect-result");
let resultBox = document.getElementById("results-box")

let secondsLeft = 60;
let secondElapsed = 0
let userAnswer = "";
const correctBonus = 10;
const maxQuestions = 6;

// Question list ===================================================
let questionsList = [
  {
    question: "Question 1",
    a: "<scripting>",
    b: "<js>",
    c: "<javascript>",
    d: "Correct Answer",
    correctAnswer: "d",
  },

  {
    question: "Question 2",
    a: "Correct answer",
    b: "The <p> section",
    c: "The <body> section",
    d: "In the CSS worksheet",
    correctAnswer: "a",
  },

  {
    question: "Question 3",
    a: "Correct",
    b: "msg('Hello World')",
    c: "msgBox('Hello World')",
    d: "alertBox('Hello World')",
    correctAnswer: "a",
  },

  {
    question: "Question 4",
    a: "Option 1",
    b: "Option 2",
    c: "Option 3",
    d: "Correct",
    correctAnswer: "d",
  },

  {
    question: "Question 5",
    a: "Option 1",
    b: "Option 2",
    c: "Correct",
    d: "Option 4",
    correctAnswer: "c",
  },

  {
    question: "Question 6",
    a: "Option 1",
    b: "Correct",
    c: "Option 3",
    d: "Option 4",
    correctAnswer: "b",
  },
];


// Start the quiz ===================================================
// Set timer ========================================================
// Display the questions ============================================
window.onload = startQuiz;

function startQuiz() {
  setTimer();
  displayQuestion();
}

function setTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Timer has ended");
      return window.location.assign("/quiz-end-page.html");
    }
  }, 1000);
}

let runningQuestionsIndex = 0; 
let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer;
let lastQuestionIndex = questionsList.length - 1;
let i = 0;

function displayQuestion() {
  let q = questionsList[runningQuestionsIndex];
  questionTitle.textContent = questionsList[i].question;
  choiceA.textContent = questionsList[i].a;
  choiceB.textContent = questionsList[i].b;
  choiceC.textContent = questionsList[i].c;
  choiceD.textContent = questionsList[i].d;
}

function showCorrect () {
  resultBox.innerHTML = "Correct"
}

function showIncorrect () {
let showIncorrect = resultBox.innerHTML = "Incorrect"
}

// Identifies which option user has clicked ===========================
var choiceAclick = false;
choiceA.addEventListener("click", function () {
  choiceAclick === true;
  userAnswer = "a";
  checkAnswer();
});

var choiceBclick = false;
choiceB.addEventListener("click", function () {
  choiceBclick === true;
  userAnswer = "b";
  checkAnswer();
});

var choiceCclick = false;
choiceC.addEventListener("click", function () {
  choiceCclick === true;
  userAnswer = "c";
  checkAnswer();
});

var choiceDclick = false;
choiceD.addEventListener("click", function () {
  choiceDclick === true;
  userAnswer = "d";
  checkAnswer();
});


// checks the answer ==============================================
let score = 0;
function checkAnswer() {
  let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer;
  if (rightAnswer === userAnswer) {
    score += 5;
    i++;
    showCorrect();
   } else {
    score -= 2;
    i++;
    showIncorrect();
  }

// Keep the questions running until get to the last question ========
// When get to the last question, go to the end of the quiz =========
// Set the score in the local storage ================================
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
  }

  if (runningQuestionsIndex === lastQuestionIndex) {
       localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/quiz-end-page.html");
  }

  CurrentScore.innerHTML = score;
}
