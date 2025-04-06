let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;
console.log(userGuess)
console.log(randomNumber)
// Prompt user for a number between 1 and 10, or type 999 to exit.
document.getElementById("myButton").onclick = function(){
    userGuess = document.getElementById("guessinput").value;
    GuessCheck(userGuess,randomNumber);
}
// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.
function GuessCheck(userGuess,randomNumber){
    console.log(userGuess)
    console.log(randomNumber)
while (userGuess != randomNumber ) {
    if (userGuess == 999){
        break;
    }
    if (userGuess > randomNumber){
        //document.getElementById("output").innerHTML += "Your guess was Too high!";
        userGuess = Number(prompt("Too high! Guess again:"));
        attempts = attempts + 1;
    }
    else if (userGuess < randomNumber){
        //document.getElementById("output").innerHTML += "Your guess was Too low!";
        userGuess = Number(prompt("Too low! Guess again:"));
        attempts = attempts + 1
        } 
}
if (userGuess == randomNumber){
    alert(`Congratulations, you've guessed it in ${attempts} tries!`);
}
}
// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
