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
console.log(correctResult);

// Loads the timer and displays the question when the page loads
window.onload = startQuiz;

function startQuiz() {
  setTimer();
  displayQuestion();
}

// Timer starts at 60
// Set timer function
let secondsLeft = 60;
let secondElapsed = 0

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

// Test that quiz finishes correctly
function quizFinished() {
  console.log("The quiz has finished");
}

// List of questions
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

// Identifies which option the user has clicked
let userAnswer = "";
let i = 0;

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

let lastQuestionIndex = questionsList.length - 1;
let runningQuestionsIndex = 0;

const correctBonus = 10;
const maxQuestions = 6;

// Call the questions
function displayQuestion() {
  let q = questionsList[runningQuestionsIndex];
  questionTitle.textContent = questionsList[i].question;
  choiceA.textContent = questionsList[i].a;
  choiceB.textContent = questionsList[i].b;
  choiceC.textContent = questionsList[i].c;
  choiceD.textContent = questionsList[i].d;
}

// Allocates rightAnswer to the answer of each of the questions.
let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer;

const resultBox = document.getElementById("results-box")
function showCorrect () {
  resultBox.innerHTML = "Correct"
}

function showIncorrect () {
let showIncorrect = resultBox.innerHTML = "Incorrect"
}

// Update the score depending if the user answer is the same as correct answer
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

    // Keep the questions running until get to the last question
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
  }

  // When get to the last question, go to the end of the quiz
  // Set the score in the local storage
  if (runningQuestionsIndex === lastQuestionIndex) {
       localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/quiz-end-page.html");
  }

  CurrentScore.innerHTML = score;
}
