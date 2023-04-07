
const express = require('express');
let bodyParser = require('body-parser');


const app = express();


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

/*
* Routes to here
*/

// Example GET request
app.get('/thing', (req, res) => {
   console.log('GET /thing request received!');
   res.send('GET /thing response');
})// End Example GET request


// Example POST request
app.post('/thing', (req, res) => {
   console.log('POST /thing request received');
   let requestedThing = req.body;
   console.log('POST /thing request:', requestedThing);

   res.sendStatus(201);
})// End Example POST request


// What port is the server running on
app.listen(5000, function () {
   console.log(`You started the server! It is running on port 5000.`);
})
