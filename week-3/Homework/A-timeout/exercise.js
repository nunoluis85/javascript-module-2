/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds). Hint: try searching for setTimeout. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

const changeBackGround = setTimeout (backGround, 5000);

function backGround() {
    document.body.style.backgroundColor = "yellow";
}



const setColors = setInterval(randomColor, 5000);

function randomColor() {
    document.body.style.backgroundColor = document.body.style.backgroundColor == "red" ? "green" : "red";
}
