//select all elements
//update inner html of our elements
//create questions inside an array

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const choiceA = document.getElementById("A");
const choiceA = document.getElementById("B");
const choiceA = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementById("scoreContainer");

let questions [

{ question : "what is your first question",
  imgSrc : "images/img.png",
  choiceA : "Answer A",
  choiceB : "Answer B",
  choiceC : "Answer C",
correct : "A"

},

{
    question : "what is your second question",
    imgSrc : "images/img.png",
    choiceA : "Answer A",
    choiceB : "Answer B",
    choiceC : "Answer C",
  correct : "C"

}


]
questions[0].question;
questions[0].imgSrc;
questions[0].choiceA;
questions[0].choiceB;
questions[0].choiceC;
questions[0].correct;

Let lastQuestionIndex = questions.length - 1;
Let runningQuestionIndex = 0;

function renderquestion (){
let q = questions[runningQuestionIndex];
qImg = 

}
