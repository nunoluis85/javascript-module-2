// Write your code here

//TODO

//Create and array of images ex {{id:, path:}}
//You have to only have 1 image HTML element
//create a function  to change the image by searching the HTML elemement and on src property asign the new image path
//when click on  forward button change to next image
//when click on  back button  change to previous image

let imageList=[
    {id:"0", path:""}]

function changeImage(direction){

    document.querySelector("slideImage")

    if (direction==="forward") {
        +1
    }

    if (direction==="back") {
        -1
    }
}