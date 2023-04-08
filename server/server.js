
const express = require('express');
let bodyParser = require('body-parser');


const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/*
* Routes to here
*/

// Example GET request
app.get('/calculator', (req, res) => {
   console.log('GET /calculator request received!');
   res.send('GET /calculator response');
})// End Example GET request


// Example POST request
app.post('/calculator', (req, res) => {
   console.log('POST /calculator request received');
   let requestedThing = req.body;
   console.log('POST /calculator request:', requestedThing);

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
   }// End add
   else if (operator === 'subtract') {
      answer = (num1 - num2)
   }// End subtract
   else if (operator === 'multiply') {
      answer = (num1 * num2)
   }// End multiply
   else if (operator === 'divide') {
      answer = (num1 / num2)
   }// End divide
   else {
      answer = `Bad info received. num1--> ${num1}, num2--> ${num2}, operator --> '${operator}'`;
   }// End undefined operator
   return answer;
}// End calculator
