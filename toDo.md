# Base Mode

## Calculator
1. ✅ Create UI where user can input 2 values (2 input elements) and select a mathematical operation ('`+`', '`-`', '`*`', '`/`'). ✅

2. ✅ Have '`=`' button that, when clicked, captures the inputs from step 1. and then send this information to the server via a POST. ✅

3. ✅ Have a '`C`' button that, when clicked, clears out the inputs from step 1. ✅

4. ✅ Build out server-side logic to compute the POSTED numbers as appropriate.
    - should handle Addition, Subtraction, Multiplication, and Division. ✅

5. ✅ Once step 4 is completed on the server, actual calculation back to client via a GET request. ✅

6. Complete README.md

## History
1. Keep a history of all the math operations and solutions on the server.

2. Display a list of ALL previous calculations on the DOM when it loads using a GET request.
    - Update the list each time a new calculation is made.
    - History should exist even after refreshing the page.
    - It's expected the history will go away after server restart.

-----
-----
# Stretch Goals
1. Convert the interface to look and behave like a calculator

2. Only allow the POST call to happen if ALL necessary inputs are ready.
    - Show an alert if the user has left something empty and don't send incomplete data to the server.

3. Allow a user to clear the history by clicking a button.
    - This should becompleted with a DELETE request.

4. Allow a user to rerun an entry in the history list by clicking on that calculation.
    - This should display the answer on the calculator interface like a normal calculation (need to complete stretch goal 1 first.)