// Elements ======================================================
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
let resultBox = document.getElementById("results-box");

let secondsLeft = 60;
let secondElapsed = 0;
let userAnswer = "";
const correctBonus = 10;
const maxQuestions = 6;

// Question list ===================================================
let questionsList = [
  {
    question: "Inside which HTML element do we put the JavaScript",
    a: "<scripting>",
    b: "<js>",
    c: "<javascript>",
    d: "<script>",
    correctAnswer: "d",
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "<head> or <body>",
    b: "The <p> section",
    c: "The <body> section",
    d: "In the CSS worksheet",
    correctAnswer: "a",
  },

  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "alert('Hello World')",
    b: "msg('Hello World')",
    c: "msgBox('Hello World')",
    d: "alertBox('Hello World')",
    correctAnswer: "a",
  },

  {
    question: "How do you create a function in JavaScript?",
    a: "function myFunction()",
    b: "function = myFunction()",
    c: "function:myFunction",
    d: "create.myFunction",
    correctAnswer: "a",
  },

  {
    question: "What is the correct syntax for referring to an external scrips called 'xxx.js'?",
    a: "<script src='xxx.js'>",
    b: "<script name='xxx.js",
    c: "<script href=xxx.js",
    d: "source.js",
    correctAnswer: "a",
  },

  {
    question: "How do you call a function?",
    a: "call myFunction",
    b: "Come here function",
    c: "myFunction()",
    d: "call Function",
    correctAnswer: "c",
  },

  {
    question: "How do you write an IF statement in Javascript?",
    a: "if i=5",
    b: "if i==5 then",
    c: "if i",
    d: "if (i==5)",
    correctAnswer: "d",
  },

  {
    question: "How does an WHILE loop start?",
    a: "start: while loop",
    b: "while (i <= 20)",
    c: "while (i <=10; i++)",
    d: "while i = 10",
    correctAnswer: "c",
  },

  {
    question: "How does a FOR loop start?",
    a: "start: for loop",
    b: "for (i <= 20; i++)",
    c: "for (i = 0; i<=5; i++)",
    d: "for i = 10",
    correctAnswer: "c",
  },

  {
    question: "How do you add a comment in JavaScript?",
    a: "Comment:",
    b: "<!--This is a comment-->",
    c: "//This is a comment",
    d: "C",
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
      endQuiz();
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

function showCorrect() {
  resultBox.innerHTML = "Correct";
  resultBox.style.color = "green"
}

function showIncorrect() {
  let showIncorrect = (resultBox.innerHTML = "Incorrect");
  resultBox.style.color = "red"
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

// checks the answer ==================================================
let score = 0;
function checkAnswer() {
  let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer;
  if (rightAnswer === userAnswer) {
    score += 10;
    i++;
    showCorrect();
  } else {
    score -= 1;
    secondsLeft -= 3;
    i++;
    showIncorrect();
  }

  // Keep the questions running until get to the last question ========
  // When get to the last question, go to the end of the quiz =========
  // Set the score in the local storage ===============================
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
  }

  if (runningQuestionsIndex === lastQuestionIndex) {
    localStorage.setItem("mostRecentScore", score);
    endQuiz();
  }
  CurrentScore.innerHTML = score;
  localStorage.setItem("runningScore", score)  
}


function endQuiz() {
  console.log(score)
  return window.location.assign("/quiz-end-page.html");
    }