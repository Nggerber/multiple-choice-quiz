// variables for start button
const start = document.getElementById("start-button");
// variable for text box to display question
const questionPrompt = document.getElementById("question-text");
choicesEl = document.getElementById("choices-list")

//Variables for the score
let score = 0;
let correct = 0;
let incoreect = 0;
let scoreEl = document.getElementById("scorep")




//array for the questions

const questions = [
    {
        question: "What letter is after b?",
        answer: "c",
        choices: ["a", "b", "c", "d"]
    },

    {
        question: "What letter comes before b?",
        answer: "a",
        choices: ["a", "b", "c", "d"]
    },

    {
        question: "What letter comes after c?",
        answer: "d",
        choices: ["a", "b", "c", "d"]
    },

    {
        question: "What letter comes after a?",
        answer: "b",
        choices: ["a", "b", "c", "d"]
    },
]

//function to start the game

function startQuiz() {
    //hide start

    //set score 
    incorrect = 0;
    correct = 0;
    score = 0;

    //run function to display questions and start timer
    displayQuestion();
    startTimer();

}

//function to display the question text in question text box from my array of questions
var currentQuestion = 0
let secondsLeft = 30;
function displayQuestion() {

    choicesEl.innerHTML = ""
    let questionIndex = questions[currentQuestion].question;
    let choicesIndex = questions[currentQuestion].choices;
    let answerIndex = questions[currentQuestion].answer;
    for (var i = 0; i < choicesIndex.length; i++) {
        var btn = document.createElement("button")
        btn.innerHTML = choicesIndex[i]
        choicesEl.appendChild(btn)
        btn.addEventListener("click", function (event) {
            if (event.currentTarget.innerHTML === answerIndex) {
                //answer is correct
                alert("Correct!")
                // score goes up
                score++
            }
            else {
                alert("Wrong!")
                //timer goes down
                secondsLeft -= 5;
            }
            //display score
            scoreEl.innerHTML = score
            // move on to the next question
            currentQuestion++
            //if we are at the end of the quiz it ends
            if (currentQuestion < questions.length) {
                displayQuestion();
            }
            else {
                endGame();
            }

        })
    }

    console.log(questionIndex)
    questionPrompt.innerHTML = questionIndex

}
var timeId
function startTimer() {

    const timeEl = document.getElementById("time");


    timeEl.innerText = 30

    timeId = setInterval(function () {
        secondsLeft--;
        timeEl.innerText = secondsLeft;

        if (secondsLeft === 0) {
            alert("times up")
            endGame();


        }

    }, 1000);

}

function endGame() {
    clearInterval(timeId);
    alert("Game over man!")
    let initials = prompt("What are your initials")
    localStorage.setItem("top score", initials + ": " + score)
    document.getElementById("high-score").innerHTML = localStorage.getItem("top score")



}


































