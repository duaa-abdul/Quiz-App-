var questions = [
  {
    question: "JS stand for",
    options: ["Javascript", "HyperText", "none"],
    correctAnswer: 0,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1,
  },
  {
    question: "What does the === operator do in JavaScript?",
    options: [
      "Compares values only",
      "Compares values and types",
      "Converts values and compares",
      " None of the above",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: [" String", " Boolean", "Character", "Number"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      "var myVariable",
      "variable myVariable",
      "let myVariable",
      "Both a and c",
    ],
    correctAnswer: 3,
  },
];

var currentQuestionIndex = 0;
var score = 0;

var questionElement = document.getElementById("question");
var optionsElement = document.getElementById("options");
var submitButton = document.getElementById("submit");
var scoreElement = document.getElementById("score");
var selectedAnswer = null;

function loadQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";

  for (var i = 0; i < currentQuestion.options.length; i++) {
    var option = document.createElement("button");
    option.textContent = currentQuestion.options[i];
    option.className = "option";
    option.setAttribute("data-index", i);
    optionsElement.appendChild(option);

    option.onclick = function () {
      selectAnswer(parseInt(this.getAttribute("data-index")));
    };
  }
}

function selectAnswer(index) {
  selectedAnswer = index;
}

submitButton.onclick = function () {
  if (selectedAnswer === null) {
    alert("Please select an answer!");
    return;
  }
  if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }

  currentQuestionIndex++;
  selectedAnswer = null;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    displayScore();
  }
};

function displayScore() {
  var quiz = document.getElementById("quiz");
  quiz.style.display = "none";
  submitButton.style.display = "none";
  scoreElement.textContent =
    "You scored " + score + " out of " + questions.length + "!";
}

loadQuestion();
