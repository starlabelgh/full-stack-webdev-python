// for loop

// const { LEGAL_TCP_SOCKET_OPTIONS } = require("mongodb");

// var age = 18
// var gender = "female"

// if (age >= 21){
//     console.log("Akua is not a teenager");
// }else if (age >= 18 && gender == "female") {
//     console.log("Akua is a teenager");
// }else {
//     console.log("I don't know Akua's age")
// }


//  while loop

// var x = 0;

// while (x < 5) {
//     console.log("x is currently: " +x)

//     if(x===3){
//         console.log("x is equal to three")
//         break;
//     }

//     console.log("x is still less than 5, adding 1 to x")

//     x = x+1
// }

//print even numbers from one to 10
// var evenNumber = 1;

// while (evenNumber <= 10) {
//     if (evenNumber%2 === 0) {
//         console.log(evenNumber);
//     }
//     evenNumber = evenNumber+1;
// }

//for loops

// var word = "ABCDEFGHIJK"

// for (var i = 0; i < word.length; i = i++){
//     console.log(word[i]);
// }

//for loop print odd numbers to 25
// for (var i = 0; i < 25; i++) {
//     if (i%2 !==0){
//         console.log(i)
//     }
// }

//while loop print odd number to 25
// var x = 1
// while (x < 25){
//     if(x%2 !==0){
//         console.log(x);
//     }
// }


//questionaire prompt form
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var age = prompt("enter your age")
var height = prompt("enter your height")
var petName = prompt("enter your pet name")
alert("thank you for the information")

//four conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;

//name condition
if (firstName[0] === lastName[0]){
    nameCond = true;
}else {
    nameCond = false;
}

//age condition
if (age > 20 && age < 30) {
    ageCond = true;
}else {
    ageCond = false;
}

//height condition
if (height >= 170) {
    heightCond = true;
}else {
    heightCond = false;
}

//pet name condition
if (petName[petName.length-1] === "y"){
    petCond = true;
}else {
    petCond = false;
}

//check all conditions
if (nameCond && ageCond && heightCond && petCond){
    console.log("WELCOME SPY!");
}else {
    console.log("Nothing to see here")
}