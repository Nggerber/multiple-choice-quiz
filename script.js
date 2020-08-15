// variables

const start = document.getElementById("start-button");
const a = document.getElementById("a-button").value;
const b = document.getElementById("b-button").value;
const c = document.getElementById("c-button").value;
const d = document.getElementById("d-button".value);

// variable to display 

const question = document.getElementById("question-text")


//variable for the questions

let questions = [
    
   

    {question : "What letter is after b", answer : "C"},

 ];

 function checkAnswer() {
     console.log(a)




 }

function startQuiz() {
    console.log("quiz is running")
    for ( i = 0; i < questions.length; i++) {
        question.innerHTML = questions[i].question;

        function checkAnswer() {
            if (answer[i] === c)
            console.log(correct)

        }

    
    }
     
}  





            
        



         
                





            









        









