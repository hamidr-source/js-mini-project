// All question
const questions = [
  { id: 1, title: "2 + 2", answer: "4" },
  { id: 2, title: "4 * 2", answer: "8" },
  { id: 3, title: "8 + 10", answer: "18" },
  { id: 4, title: "4 + 4", answer: "8" },
  { id: 5, title: "4 * 4", answer: "16" },
];

// User score
let score = 0;


// User answer 
let userAnswer = "";


questions.forEach(function (question) {

  // Prompt questions
  let userAnswer = prompt("Please enter your answer \n"+ question.title + "    ?");

  // Check  user answer is correct or wrong 
  if (userAnswer === question.answer) {
    score++
    alert("Your answer is correct\n score:  "+ score)
  }else {
    alert("Your answer is wrong!!!")
  }
});
