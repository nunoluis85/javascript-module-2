//Task 1 
var blueBtn = document.getElementById("blueBtn")
blueBtn.addEventListener("click", () =>  changeColor(`#588fbd`,`#ffa500`, `black`, `white`))

var orangeBtn = document.getElementById("orangeBtn")
orangeBtn.addEventListener("click", () => changeColor(`#f0ad4e`,`#5751fd`, `#31b0d5`, `white`))

var greenBtn = document.getElementById("greenBtn")
greenBtn.addEventListener("click", () => changeColor(`#87ca8a`,`black`, `#8c9c08`))
 
// Define a function to change the color passing through parameters the color
function changeColor(jumboBackground, donateBackground, volunteerBackground,  volunteerColor)
{ 
    var jumbotron = document.getElementsByClassName("jumbotron")
    jumbotron[0].style.backgroundColor = jumboBackground 

    var donateABike = document.getElementsByClassName("btn btn-primary btn-lrg")
    donateABike[0].style.backgroundColor = donateBackground

    var volunteer = document.getElementsByClassName("btn btn-secondary btn-lrg")
    volunteer[0].style.backgroundColor = volunteerBackground
    volunteer[0].style.color = volunteerColor
}

// Task 2
 
var submitBtn = document.querySelectorAll("button[type=submit]")[0]
submitBtn.addEventListener("click", (event) => submitForm(event))
  
var emailField = document.getElementById("exampleInputEmail1")
var nameField = document.getElementById("example-text-input")
var describeField = document.getElementById("exampleTextarea")

function submitForm(event)
{ 
    event.preventDefault()
 
    if(emailField.value === "" || emailField.value == null || emailField.value.length <= 0  )
    {      
        emailField.style.borderColor = "red";
    } else {
        emailField.style.borderColor = "grey";
    }

    if(nameField.value === "" || nameField.value == null || nameField.value.length <= 0  )
    {        
        nameField.style.borderColor = "red";
    } else {
        nameField.style.borderColor = "grey";
    }

    if(describeField.value === "" || describeField.value == null || describeField.value.length <= 0  )
    {        
        describeField.style.borderColor = "red";
    } else {
        describeField.style.borderColor = "grey";
    }

    if (emailField.value.length <= 0 
        || nameField.value.length <= 0
        || describeField.value.length <= 0)
    {
        return;
    }

    if(!emailField.value.includes("@") || !emailField.value.includes(".com")) {
       alert("Invalid email address")
       emailField.style.borderColor = "red";
       return
    } 

    alert("Thank you for filling out the form")

    emailField.value = ""
    nameField.value = ""
    describeField.value = ""

}


