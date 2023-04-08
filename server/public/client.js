$(document).ready(onReady);

let operator;


function onReady() {
   //Call to get the page initially in sync with the server
   getCalcHistory();

   //Create listener to declare value of operator
   // example if clicked would assign operator
   // value of 'add'
   $('.operator-btn').on('click', setOperator)

   $('#equals-Submit').on('click', equalsSubmit)
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
         console.log('POST /calculator call successful');
         console.log('response:', response);
      }
   ).catch(
      function (error) {
         console.log('POST /calculator call failed');
         console.log('error:', error);
      }
   )

   //reset input fields on function call
   //resetInput()
   $('#num1').val('');
   $('#num2').val('');

   console.log(calculatedQuestion);

   $('.operator-btn').removeClass('blued-out')

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
         console.log('GET /calculator call successful');
         console.log('response:', response);
         updateHistory(response);
         $('#answer-deposit').empty();
         $('#answer-deposit').append(`
            <h2>${response[response.length-1].answer}</h2>
         `);
      }
   ).catch(
      function (error) {
         console.log('GET /calculator call failed');
         console.log('error:', error);
      }
   );
}// End makeGetCall


function updateHistory(calcHistory){

   $('#history-deposit').empty();

   let x = 0;

   //loop through historyArray and add new list item
   // to ul with id="history-deposit"
   for (let question of calcHistory){
      $('#history-deposit').append(`
         <li id="${x}">${question.string}</li>
      `)
      x++
   }
}