// the roster questionaire popup form
var roster = []

//add new name to roster
function addNew() {
    var newName = prompt("What name would you like to add?")
    roster.push(newName)
}

//remove a name from the roster
function remove() {
    var remName = prompt("What name would you like to remove?")
    var index = roster.indexOf(remName);
    roster.splice(index,1)
}

//display add names in the roster
function display() {
    console.log(roster);
}

//user input request
var start =  prompt("Would you like t start your roster web app? y/n")
var request = "empty";

//logic to process user input
if (start === 'y') {
    while (request !== "quit"){
        request = prompt("Please select an action: add, remove,display, or quit.")
        if (request === 'add') {
            addNew();
        }else if (request === 'display') {
            display();
        }else if (request === 'remove') {
            remove();
        }else {
            alert("Not recognized")
        }
    }
}

alert("Thank you for using the WebApp, please refresh to start over!")