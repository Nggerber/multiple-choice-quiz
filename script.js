// variables for start button
const start = document.getElementById("start-button");
// variable for text box to display question
const questionPrompt = document.getElementById("question-text");
choicesEl = document.getElementById("choices-list")

//Variables for the score
let score = 0;
let correct = 0;
let incoreect = 0;



//variable for the questions

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
    console.log("game is started")

    //set score 
    incorrect = 0;
    correct = 0;
    score = 0;
    //run function to display questions
    displayQuestion();
    startTimer();
    
}

//function to display the question text in question text box from my array of questions
function displayQuestion() {


    let questionIndex = questions[0].question;
    let choicesIndex = questions[0].choices;
    console.log(questionIndex)
    questionPrompt.innerHTML = questionIndex
    choicesEl.innerHTML = choicesIndex
    
    

}

function startTimer() {

    const timeEl = document.getElementById("time");
    let secondsLeft = 30;

    timeEl.innerText = 30

    const timeId = setInterval(function() {
    secondsLeft --;
    timeEl.innerText = secondsLeft;

    if (secondsLeft === 0) {
    alert("times up")
    clearInterval(timeId);
}

}, 1000);

}


            
        



         
                





            









        









