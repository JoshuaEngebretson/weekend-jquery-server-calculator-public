
const express = require('express');
let bodyParser = require('body-parser');

let questionArray = [];
let questionAndAnswerString;


const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/*
* Routes to here
*/

// Example GET request
app.get('/calculator', (req, res) => {
   console.log('GET /calculator request received!');
   res.send(questionArray);
})// End Example GET request


// Example POST request
app.post('/calculator', (req, res) => {
   console.log('POST /calculator request received');
   let newQuestion = req.body;

   let num1 = Number(newQuestion.num1)
   let num2 = Number(newQuestion.num2)
   let operator = newQuestion.operator

   let answer = calculator(num1, num2, operator)


   let currentQuestion = {
      num1: num1,
      num2: num2,
      operator: operator,
      answer: answer,
      string: questionAndAnswerString
   }

   console.log(`questionAndAnswerString: ${currentQuestion.string}`);

   questionArray.push(currentQuestion)

   console.log(questionArray);

   res.sendStatus(201);
})// End Example POST request


// What port is the server running on
app.listen(5000, function () {
   console.log(`You started the server! It is running on port 5000.`);
})


function calculator(num1, num2, operator) {
   let answer;

   if (operator === 'add') {
      answer = (num1 + num2)
      questionAndAnswerString = `${num1} + ${num2} = ${answer}`
   }// End add
   else if (operator === 'subtract') {
      answer = (num1 - num2)
      questionAndAnswerString = `${num1} - ${num2} = ${answer}`
   }// End subtract
   else if (operator === 'multiply') {
      answer = (num1 * num2)
      questionAndAnswerString = `${num1} * ${num2} = ${answer}`
   }// End multiply
   else if (operator === 'divide') {
      answer = (num1 / num2)
      questionAndAnswerString = `${num1} / ${num2} = ${answer}`
   }// End divide
   else {
      answer = `Bad info received. num1--> ${num1}, num2--> ${num2}, operator --> '${operator}'`;
   }// End undefined operator
   return answer;
}// End calculator
