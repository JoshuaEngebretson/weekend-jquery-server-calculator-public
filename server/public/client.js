$(document).ready(onReady);

let operator;


function onReady() {
   //Call to get the page initially in sync with the server
   makeGetCall();

   //Create listener to declare value of operator
   // example if clicked would assign operator
   // value of 'add'
   $('.operator-btn').on('click', setOperator)

   $('#equals-Submit').on('click', equalsSubmit)
 }


function equalsSubmit(event) {
   event.preventDefault();
   console.log('in equalsSubmit');

   let calculatedQuestion = {
      num1: $('#num1').val(),
      num2: $('#num2').val(),
      operator: operator
   };

   //reset input fields on function call
   //resetInput()
   $('#num1').val('');
   $('#num2').val('');

   makeGetCall();
}// End equalsSubmit


function setOperator(event) {
   event.preventDefault();

   //Set value of operator depending on the id
   // of the button that was clicked.
   if ($(this).attr('id') === 'add-btn') {
      operator = 'add'
   }// End if add
   else if ($(this).attr('id') === 'subtract-btn'){
      operator = 'subtract'
   }// End if subtract
   else if ($(this).attr('id') === 'multiply-btn'){
      operator = 'multiply'
   }// End if multiply
   else if ($(this).attr('id') === 'divide-btn'){
      operator = 'divide'
   }// End if divide

   console.log(operator);
   
}


// function to GET the DOM in sync with server
function makeGetCall() {

   $.ajax({
      method: 'GET',
      url: '/calculator',
   }).then(
      function (response) {
         console.log('GET /calculator call successful');
         console.log('response:', response);
      }
   ).catch(
      function (error) {
         console.log('GET /calculator call failed');
         console.log('error:', error);
      }
   );
}// End makeGetCall


// function to POST info to server
function makePostCall() {
   let newThing = {
      name: 'thing name',
      description: 'thing description',
   };

   $.ajax({
      method: 'POST',
      url: '/calculator',
      data: newThing
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
}// End makePostCall

