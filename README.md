# Weekend jQuery Server Calculator (W7)


## Description
Duration: Weekend Project (04/07/23 - 04/09/23)

Created a calculator app for the user to utilize within their browser. The logic for the calculations is handled on the server and then sent back to the browser for the user to see.

This was acheived through the utilization of jQuery, and hosting the server via NODE.

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation
1. Node module - Express
    - Once Node is installed you will need to perform the following command within your terminal `npm install express`
2. Run `node server/server.js`
    - This will start hosting the server
3. Using your chosen browser go to [localhost:5000](http://localhost:5000/)
    - If the server is running, this will launch the calculator app in your browser!

## Usage
To utilze the calculator:
1. Enter a number in the first input field labeled `First Number`
2. Select a mathematical operation ('`+`', '`-`', '`*`', or '`/`')
3. Enter a number in the second input field labeled `Second Number`
4. Click on the `=` button
    - This will run the calculator and provide your answer
    - This will also update the app to show any past calculations that have occured while the server has been active.
5. Click on the `C` button to clear both your inputs and the chosen mathematical operation. 
    - This is an optional button, as these fields are cleared automatically when you click on the `=` button.
6. Repeat steps 1-5 for any additional calculations.

## Built With
- Node.js
- jQuery.js

## Acknowledgement
- Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
- Thanks to my grandparents for helping me acheive my dreams.

## Support
If you have suggestions or issues, please email me [here](mailto:joshua.engebretson@gmail.com).