//grabing the header
var header = document.querySelector("h1")

header.style.color = 'red'

//JS function to generate random color hexcodes
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = '#';
    for (var i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color
}

// simple function for clarity
function changeHeaderColor() {
    colorInput = getRandomColor()
    Headers.style.color = colorInput;
}

//Now perform the action over intervals (milliseconds)
setInterval("changeHeaderColor()",500);