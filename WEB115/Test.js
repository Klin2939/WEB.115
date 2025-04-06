//Introduction to JavaScript Functions, Data Types, and Operators
//
let globalLetVar = "I am a global variable declared with let!"; 
// A global variable declared with 'let'
var globalVar = "I am a global variable declared with var!"; 
// A global variable declared with 'var'
function checkScope() {
    if (true) {
        var functionVar = "I am accessible throughout this function!";
        let blockLetVar = "I am only accessible in this block!";
        console.log(blockLetVar); 
        // Outputs: I am only accessible in this block!
        console.log(functionVar); 
        // Outputs: I am accessible throughout this function!
    }
    console.log(functionVar); 
    // Outputs: I am accessible throughout this function!
    console.log(blockLetVar); 
    // Uncaught ReferenceError: blockLetVar is not defined
}
checkScope(); 
// Calling the function
console.log(globalLetVar); 
// Outputs: I am a global variable declared with let!
console.log(globalVar); 
// Outputs: I am a global variable declared with var!
document.getElementById('myButton').onclick = function() {
    alert('You clicked the button!');
}
//There are many other types of events you can attach event listeners to any HTML element, not just buttons. 
//Other common events include "mouseover", "mouseout", "keydown", "keyup", "load", and many others.

//Introduction to JavaScript Arrays and Loops
//
//Arrays with while loops
let family = ['Mom', 'Dad', 'Sister', 'Brother', 'Cousin']
let index = 0;
while (index < family.length) { 
    let relative = family[index];
    console.log('Hey, "'+ relative + ', come to my birthday!');
    index++;
} 
console.log('Done, all family members have been invited!');

//Arrays with for loops
let family1 = ['Mom', 'Dad', 'Sister', 'Brother', 'Cousin'];
for (let i = 0; i < family1.length; i++) {
    let relative = family1[i];
    console.log('Hey, ' + relative + ', would you like to come to my birthday?');
}
console.log('Done, all family members have been invited!');


// Lecture: Introduction to Conditionals
//
let temperature = 85;
//If the result is true, the code within the curly braces {} executes. 
//If the result is false, JavaScript skips over the code block.
if (temperature < 80) {
    console.log("It's not that hot out");
} 
//The if-else statement extends the functionality of an if statement by allowing you to execute 
//a different block of code when the condition is false.
else if (temperature < 90) {
    console.log("It's pretty hot out");
} 
else {
    console.log("It's really hot out");
}


let day = 'Tuesday';
switch (day) {
    case 'Monday':
        console.log('Start of the work week');
        break;
    case 'Tuesday':
        console.log('At least it\'s not Monday');
        break;
    case 'Friday':
        console.log('End of the work week');
        break;
    default:
        console.log('Just another day');}


//Enhancing and Validating Forms
//
//Accessing by Element Id
var inputElement = document.getElementById('inputId');
var inputValue = inputElement.value;

//Accessing by Form Name
var inputValue = document.forms['formName'].elements['inputName'].value;

//Accessing Selected Value
let selectElement = document.querySelector('#mySelect');
let selectedValue = selectElement.value;

//Listening for Changes: 
//You can listen for when the selected value changes by adding an event listener for the 'change' event
selectElement.addEventListener('change', function() {
    // Code to run when the selected value changes
});

//Changing the selected value programmatically
document.getElementById("mySelect").value = "option2";

//Adding a new option: The user could also add a new option to the select list via JavaScript
let newOption = document.createElement("option"); 
newOption.value = "option4"; 
newOption.text = "Option 4"; 
document.getElementById("mySelect").add(newOption);

//Storing Values in Hidden Fields
//HTML Setup == <input type="hidden" name="hiddenField" value="hiddenValue" />
const hiddenField = document.querySelector('input[type="hidden"]');
console.log(hiddenField.value); 
// logs: 'hiddenValue'
hiddenField.value = 'newValue';
console.log(hiddenField.value); 
// logs: 'newValue'

//Validating Form Fields with Regular Expressions
//
let regex = /^[a-zA-Z0-9]*$/;
// Regular expression example
if (!regex.test(inputString)) {
    alert('Invalid format!');
}
// regex setup
function validateEmail() {
    let email = document.getElementById('email').value;
    let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regex.test(email)) {
        alert('Invalid email format!');
}}
//Uses the provied regex in JavaScript code to validate an email field in a form


// EXTRA INFO: Korbens mess up on practice Mid Term

//The ternary operator is a simplified conditional operator like if / else.
//Syntax: condition ? <expression if true> : <expression if false>
//EX:
authenticated ? renderApp() : renderLogin();

// The confirm() method displays a dialog box with a message, an OK button, and a Cancel button.
//The confirm() method returns true if the user clicked "OK", otherwise false.
confirm("Press a button!\nEither OK or Cancel.");

//a way of writing numbers using exponents to represent repeated multiplication or division.
//EX:
// 10^3 means 10 x 10 x 10, or 1,000
// 8^2 means 8 x 8, or 64
// 5^4 means 5 x 5 x 5 x 5, or 625
// 3.25 x 102 is the scientific notation for 325
// 4.5E–3 is the same as 0.0045
// 1E–6 is the same as 0.000001

//ECMAScript == the Standard or rules for JavaScript (scripting languages in general)





//#1 - Enclosing embedded JavaScript statements within a script element of an XHTML document in a CDATA section causes them to be treated as parsed character data, which will invalidate the XHTML document.
//#2 - Enclosing embedded JavaScript statements within a script element of an XHTML document in a CDATA section causes them to be treated as parsed character data, which will invalidate the XHTML document.