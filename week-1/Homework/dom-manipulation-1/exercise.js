/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const allP = document.querySelectorAll("p");

console.log(allP);


const firstDiv = document.querySelector(".site-header");

console.log("first div",firstDiv);


const elementId = document.getElementById("jumbotron-text");
console.log(elementId)


const pContent = document.querySelector(".primary-content");
const pElements = pContent.querySelectorAll("p");
console.log(pElements);


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let alertButton = document.querySelector("#alertBtn");
alertButton.addEventListener("click", (event) => {
    alert("Thanks for visiting Bikes for Refugees!");
});


    

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/


let backgroundButton = document.querySelector("#bgrChangeBtn");
//backgroundButton.addEventListener("click", changeColor);

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

//backgroundButton.addEventListener("click", (event) => {
    //changeColor("red");
//})

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let addText = document.querySelector("#addTextBtn");

addText.addEventListener("click", paragraph);

function paragraph() {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph.";
    
    const addParagraph = document.getElementById("mainArticles");
    addParagraph.appendChild(newParagraph);

}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let increaseText = document.querySelector("#largerLinksBtn");
increaseText.addEventListener("click", increase);

function increase() {
    const allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
        //console.log("Elemento a", link)
        link.style.fontSize = "1.5em"});
} 


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

const articleButton = document.getElementById("addArticleBtn");
const inputText = document.querySelector("input");
const mainArticles = document.getElementById("mainArticles");

articleButton.addEventListener("click" , (event) => {
    const anotherNewP = document.createElement("p");
    //console.log("elemento p", anotherNewP)
    anotherNewP.textContent = inputText.value;
    mainArticles.appendChild(anotherNewP);
    inputText.value = "";
})

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let colors = ["red", "black", "blue", "pink", "yellow"];
var counter = 0;
let colorButton = document.querySelector("#bgrChangeBtn");

colorButton.addEventListener("click", (event) => changeMultipleColor(colors))
 
function changeMultipleColor(colors) {    
    var lastColor= colors[colors.length -1]   
    var currentColor=  colors[counter]

    document.body.style.backgroundColor = currentColor   

    if (currentColor===lastColor) {
        counter = 0;
        return;
    }
    counter++;
}
