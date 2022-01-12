console.log("js connected");

let choiceA = document.getElementById("op1");
let choiceB = document.getElementById("op2");
let choiceC = document.getElementById("op3");
let choiceD = document.getElementById("op4");
let options = document.getElementById("choice-box")
let timerEl = document.querySelector(".timer");
let questionTitle = document.getElementById("title")
let CurrentScore = document.getElementById("score");
let correctResult = document.getElementById("correct-result");
let incorrectResult = document.getElementById("incorrect-result")
console.log(correctResult)

// Loads the timer and displays the question when the page loads
window.onload = startQuiz

function startQuiz() {
  // setTimer();
  displayQuestion();
  }


// Timer starts at 60
// Set timer function
let secondsLeft = 60;

function setTimer() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("Timer has ended");
      return window.location.assign("/end.html")
    }
  }, 1000);
}

// Test that quiz finishes correctly 
function quizFinished() {
  console.log("The quiz has finished")
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
let userAnswer = ""
let i = 0

var choiceAclick = false
choiceA.addEventListener("click", function () {
  choiceAclick === true
  userAnswer = "a"
  processResponse()
  checkAnswer()
})

var choiceBclick = false
choiceB.addEventListener("click", function () {
  choiceBclick === true
  userAnswer = "b"
  processResponse()
  checkAnswer()
})

var choiceCclick = false
choiceC.addEventListener("click", function () {
  choiceCclick === true
  userAnswer = "c"
  processResponse()
  checkAnswer()
})

var choiceDclick = false
choiceD.addEventListener("click", function () {
  choiceDclick === true
  userAnswer = "d"
  processResponse()
  checkAnswer()
})


function processResponse() {
  console.log("user has selected '" + userAnswer + "'")
}

let lastQuestionIndex = questionsList.length - 1;
let runningQuestionsIndex = 0;

const correctBonus = 10;
const maxQuestions = 6

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
let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer

// Update the score depending if the user answer is the same as correct answer
let score = 0;
function checkAnswer() {
  let rightAnswer = questionsList[runningQuestionsIndex].correctAnswer
  console.log("The correct answer is " + rightAnswer)
  
  if (rightAnswer === userAnswer) {
   score++;
   i++;
    console.log("The user has selected the correct answer")
  } else {
    console.log("The user has selected the incorrect answer: " + userAnswer)
    score--;
    i++;
      
  }

  console.log("The running question index is " + runningQuestionsIndex)
// Keep the questions running until get to the last question
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
  }

  // When get to the last question, go to the end of the quiz
  if (runningQuestionsIndex === lastQuestionIndex) {
    console.log("quiz has finished");
    localStorage.setItem("mostRecentScore", score)
    return window.location.assign("/end.html");
  }
  console.log("The current score is " + score);
  CurrentScore.innerHTML = score;
}





// 1. The user presses start quiz
//  a. The timer begins to count down from 100
//  b. The questions appear
// 2. The user selects their answer
//  a. If the correct answer is chosen, "correct" will appear and score will increase 
//  b. If the wrong answer is chosen, "incorrect" will appear and score will decrease 
//  // 3. User selects next questions and function 1b - 2c is repeated until the timer runs our OR the questions end
// 4. Quiz finishes
//  a. Score is shown
//  b. User enters their name into the score board and press submit
// 6. Score Board is shown
// 7. Try again or show scoreboard
// 8. Score board shows all the scores in the local storage and orders them. Remember local storage all stores as strings 

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
// 