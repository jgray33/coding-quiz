console.log("is this connected");

const submitBttn = document.getElementById("submit-button");
let choiceA = document.getElementById("op1");
let choiceB = document.getElementById("op2");
let choiceC = document.getElementById("op3");
let choiceD = document.getElementById("op4");
let title = document.getElementById("title");
let options = document.getElementById("all-options")
var timerEl = document.querySelector(".timer");
let questionInstr = document.getElementById("questionInstr");
let CurrentScore = document.getElementById("score");
let correctResult = document.getElementById("correct-result");
let incorrectResult = document.getElementById("incorrect-result")


// Timer starts at 60

var secondsLeft = 60;

// Set timer function
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

// When start button is clicked, the timer will start
submitBttn.addEventListener("click", () => {
  setTimer();
});

function quizFinished () {
  console.log("The quiz has finished")
}

// Removes the start button
const changeBttn = () => submitBttn.classList.add("invisible")

// Removes the title
const removeTitle = () => title.classList.add("invisible")

// Displays the options
const displayOptionsBox = () => options.classList.add("visible")

// Removes the options boz
const removeOptionsBox = () => options.classList.add("invisible")

// Displays correct if right answer is chosen
const displayCorrectResult = () => correctResult.classList.add("visible")

const displayIncorrectResult = () => incorrectResult.classList.add("visible")

// When the start button is clicked, the first question appears, 
// the title is removed and the start button is removed
// And the options appear
submitBttn.addEventListener("click", () => {
  displayQuestion();
  removeTitle();
  changeBttn();
  displayOptionsBox();
  });


// List of questions
let questionsList = [
  {
    question: "Questions 1",
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

let lastQuestionIndex = questionsList.length - 1;
let runningQuestionsIndex = 0;

// Identifies which option the user has clicked
let userAnswer = ""

var choiceAclick = false
choiceA.addEventListener("click", function(){
    choiceAclick === true
    userAnswer = "a"
    console.log("user has selected " + userAnswer)
})

var choiceBclick = false
choiceB.addEventListener("click", function(){
    choiceBclick === true
    userAnswer = "b"
    console.log("user has selected " + userAnswer)
})

var choiceCclick = false
choiceC.addEventListener("click", function(){
    choiceCclick === true
    userAnswer = "c"
    console.log("user has selected " + userAnswer)
})

var choiceDclick = false
choiceD.addEventListener("click", function(){
    choiceDclick === true
    userAnswer = "d"
    console.log("user has selected " + userAnswer)
  })

if (choiceAclick === true) {
  userAnswer = "a"
} else if (choiceBclick === true) {
  userAnswer = "b"
} else if (choiceCclick === true) {
  userAnswer = "c"
} else if (choiceDclick === true) {
  userAnswer = "d"
}

// Call the questions
function displayQuestion() {
  let q = questionsList[runningQuestionsIndex];
  questionInstr.innerHTML = "<p>" + q.question + "</p>";
  choiceA.textContent = q.a;
  choiceB.textContent = q.b;
  choiceC.textContent = q.c;
  choiceD.textContent = q.d;
          }

var rightAnswer = questionsList[runningQuestionsIndex].correctAnswer


// Update the score depending if the user answer is the same as correct answer
 let score = 0;
function checkAnswer() {
  rightAnswer = null
  correctResult = null
  userAnswer = null
  console.log("The correct answer is " + rightAnswer)
    if (rightAnswer === userAnswer) {
    score++; 
        console.log("The user has selected the correct")
          } else if (rightAnswer !== userAnswer) {
      console.log("The user has selected the incorrect answer")
    score--;
          }

    console.log("The running question index is " + runningQuestionsIndex)
  if (runningQuestionsIndex < lastQuestionIndex) {
    runningQuestionsIndex++;
    displayQuestion();
      } 
if (runningQuestionsIndex === lastQuestionIndex) {
    console.log("quiz has finished")
    }


console.log("The current score is " + score);
CurrentScore.innerHTML = score;
}

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
