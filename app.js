
//variable stores the number of squares that will be available in the game as per mode
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var systemMessageDisplay = document.querySelector("#default-code");
var userMessageDisplay = document.querySelector("#user-code");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var header = document.querySelector('#header');


var colors = generateRandomColor(6)
pickedColor = pickColor()
//empty array which contains the random six or three RGB color code generated every time the game is reset or the mode is changed.

resetButton.addEventListener('click', function(){
    colors = generateRandomColor(6)
    pickedColor = pickColor()
    systemMessageDisplay.innerHTML = pickedColor
    header.style.backgroundColor = 'steelblue'
    userMessageDisplay.innerHTML = ''
    for(i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
})

// systemMessageDisplay.innerHTML = pickedColor


for(i=0; i<squares.length; i++){
    //apply background color to all the squares...
    squares[i].style.backgroundColor = colors[i]
    //enable click event on each square...
    squares[i].addEventListener('click', function(){
        //select the background color of the selected color block and assign it to clickedColor
        let clickedColor = this.style.backgroundColor

        //check if the selected color matched the default default color
        if(pickedColor === clickedColor){
            changeColors(pickedColor)
        }else{
            this.style.backgroundColor = "#232323"
            messageDisplay.text = "Wrong!!!"
        }


    })
}




//is the color/option block selected by the user upon every click.


function changeColors(color){
    for(i=0; i<=squares.length; i++){
        squares[i].style.backgroundColor = color
        
    }
}

function pickColor(){
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}





function randomColor(){
    //pick a "red" from 0 - 255
    const r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 - 255
    const g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 - 255
    const b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")"
}


function generateRandomColor(num){
    //make an array
    const arr = []
    //rund the randomColor function num times
    for(i=0; i<num; i++){
        arr.push(randomColor())
    }
    return arr 
}



function reset (){
    //create a new array of 6 random colors
    //pick new random color
    //fill the squares with new set of generated colors
}








