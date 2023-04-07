$(document).ready(onReady);


function onReady() {
   //Call to get the page initially in sync with the server
   makeGetCall();
   
   $('#equals-Submit').on('click', equalsSubmit)
 }


function equalsSubmit(event) {
   event.preventDefault();
   console.log('in equalsSubmit');
   makeGetCall();
}// End equalsSubmit


// function to GET the DOM in sync with server
function makeGetCall() {

   $.ajax({
      method: 'GET',
      url: '/thing',
   }).then(
      function (response) {
         console.log('GET /thing call successful');
         console.log('response:', response);
      }
   ).catch(
      function (error) {
         console.log('GET /thing call failed');
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
      url: '/thing',
      data: newThing
   }).then(
      function (response) {
         console.log('POST /thing call successful');
         console.log('response:', response);
      }
   ).catch(
      function (error) {
         console.log('POST /thing call failed');
         console.log('error:', error);
      }
   )
}// End makePostCall

