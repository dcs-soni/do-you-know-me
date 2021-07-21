var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "\nDuggu is my pet name 😁 Do you know my real name? ",
  answer: "Divyanshu"
}, 
{
  question: "\nHow old am I? ",
  answer: "19"
},
{
  question: "\nWhere do I live? ",
  answer: "Ahmedabad"
},
{
  question: "\nWhat am I currently learning? ",
  answer: "JavaScript"
}];


//If ans is correct this func is executed
function correct() {
  console.log("Dammn, you are right!!");
  score += 1;
  console.log("\nCurrent Score: ", score, "\n");
  console.log("-------------------");
}

//If ans is wrong this function is executed
function wrong(answer) {
  console.log("Ohh snap!! You did a mistake");
  console.log("Correct ans is ", answer);

  if(score > 0){
    score -= 1;
  }else{
    score = 0;
  }

  console.log("\nCurrent Score: ", score, "\n");
  console.log("-------------------");
}



//The function will compare the original answer and answer given by player
function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    correct();
  }else{
    wrong(answer); 
  }
}

//This will loop through the questions
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    // console.log(currentQuestion)
    play(currentQuestion.question, currentQuestion.answer);
  }
}



function start() {
  console.log("------------------------------");
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " Let's play a game!");
  console.log("------------------------------");

  game();
}


//Start the game
start();


console.log("Final Score: ", score);