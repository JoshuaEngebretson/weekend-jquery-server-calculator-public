$(document).ready(onReady);

let operator;


function onReady() {
   //Call to get the page initially in sync with the server
   getCalcHistory();

   clickListeners();
 }

//Capture math operation and POST to server
function equalsSubmit(event) {
   event.preventDefault();
   console.log('in equalsSubmit');

   let calculatedQuestion = {
      num1: $('#num1').val(),
      num2: $('#num2').val(),
      operator: operator
   };

   // Send mather operation to server
   $.ajax({
      method: 'POST',
      url: '/calculator',
      data: calculatedQuestion
   }).then(
      function (response) {
         ajaxSuccessLogs('Post /calculator successfull', response)
      }
   ).catch(
      function (error) {
         ajaxErrorLogs('POST /calculator failed', error)
      }
   )

   //reset input fields on function call
   // and clear out selected operator
    calcReset();

   console.log(calculatedQuestion);

   getCalcHistory();
}// End equalsSubmit


function setOperator(event) {
   event.preventDefault();

   // Remove coloring from all operator-btn
   // This helps ensure we don't have multiple
   // buttons showing as blue ever
   $('.operator-btn').removeClass('blued-out')

   //Set value of operator depending on the id
   // of the button that was clicked.
   if ($(this).attr('id') === 'add-btn') {
      operator = 'add'
      $(this).addClass('blued-out')
   }// End if add
   else if ($(this).attr('id') === 'subtract-btn'){
      operator = 'subtract'
      $(this).addClass('blued-out')
   }// End if subtract
   else if ($(this).attr('id') === 'multiply-btn'){
      operator = 'multiply'
      $(this).addClass('blued-out')
   }// End if multiply
   else if ($(this).attr('id') === 'divide-btn'){
      operator = 'divide'
      $(this).addClass('blued-out')
   }// End if divide
}// End setOperator


// function to GET the DOM in sync with server
function getCalcHistory() {

   $.ajax({
      method: 'GET',
      url: '/calculator',
   }).then(
      function (response) {
         ajaxSuccessLogs('GET /caclulator successful', response);
         updateHistory(response);
         appendAnswer(response);
      }
   ).catch(
      function (error) {
         ajaxErrorLogs('GET /calculator failed', error);
      }
   );
}// End makeGetCall


function updateHistory(calcHistory){

   $('#history-deposit').empty();

   let indexNum = 0;

   //loop through historyArray and add new list item
   // to ul with id="history-deposit"
   for (let question of calcHistory){
      appendQuestion(question, indexNum);
      indexNum++
   }
}

function clearInputField(event) {
   event.preventDefault();
   console.log('in clearInputField');
   calcReset();
}

function calcReset(){
   
   // Clear out num1 and num2 fields
   $('#num1').val('');
   $('#num2').val('');

   // reset chosen operator
   $('.operator-btn').removeClass('blued-out')
}

function clickListeners() {
   //Create listener to declare value of operator
   // example if clicked would assign operator
   // value of 'add'
   $('.operator-btn').on('click', setOperator);

   $('#equals-Submit').on('click', equalsSubmit);

   $('#clear-inputs').on('click', clearInputField);
}

function ajaxErrorLogs(errorMessage, error) {
   console.log(errorMessage);
   console.log('error:', error);
}

function ajaxSuccessLogs(sucessMessage, response) {
   console.log(sucessMessage);
   console.log('response:', response);
}

function appendAnswer(response) {
   $('#answer-deposit').empty();
   $('#answer-deposit').append(`
      <h2>${response[response.length-1].answer}</h2>
   `);
}

function appendQuestion(question, indexNum) {
   $('#history-deposit').append(`
      <li id="${indexNum}">${question.string}</li>
   `);
}
