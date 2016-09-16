// Comments:
// Note: You can use you browsers Console menu to play if nothing shows up
// Note: This is still a work in progress


// Where all the variables are contained, if edited the game is unusable More vars at the bottom of script
var userInput = prompt("Please choose one of the following - Rock, Paper or Scissors?")

var computerInput = Math.random()

var winner = "Undefined(Something bad happened... Report on https://github.com/jasoryeh/Rock-Paper-Scissos-JavaScript/issues)"

var reloadTempScript = "Reload Script Error(Something bad happened... Report on https://github.com/jasoryeh/Rock-Paper-Scissos-JavaScript/issues)"
// End of variables

// Computing the outcomes of the Computer
if(computerInput < 0.33) {
	computerInput = "Rock"
}
else if(computerInput < 0.65) {
	computerInput = "Paper"
}
else
{
	computerInput = "Scissors"
}
// End of computer

// Determine if computer or user won or was it a tie
if(userInput.toUpperCase() === computerInput.toUpperCase()) {
	winner = "It was a tie! So no one has won. Try again =)!"
}
else if(userInput.toUpperCase() === "ROCK") {
	if(computerInput === "Paper") {
		winner = " Computer"
	}
	else
	{
		winner = " User(That's you!) "
	}
}
else if(userInput.toUpperCase() === "PAPER") {
	if(computerInput === "Rock") {
		winner = " User(That's you!) "
	}
	else
	{
		winner = " Computer"
	}
}
else if(userInput.toUpperCase() === "SCISSORS") {
	if(computerInput === "Rock") {
		winner = " Computer"
	}
	else {
		winner = " User (That's you!)"
	}
}
else if(userInput.toUpperCase() === "ROCKS") {
	if(computerInput === "Paper") {
		winner = " Computer"
	}
	else
	{
		winner = " User(That's you!) "
	}
}
else if(userInput.toUpperCase() === "PAPERS") {
	if(computerInput === "Rock") {
		winner = " User(That's you!) "
	}
	else
	{
		winner = " Computer"
	}
}
else if(userInput.toUpperCase() === "SCISSOR") {
	if(computerInput === "Rock") {
		winner = " Computer"
	}
	else {
		winner = " User (That's you!)"
	}
}
else if(userInput.toUpperCase() === "JASOR") {
	winner = " User (Most likely Jasor if not you found my easter egg) "
}
else if(userInput.toUpperCase() === "BRIAN") {
	winner = " User (Most likely Jasor if not you found my easter egg) "
}
else if(userInput.toUpperCase() === "EDDIE") {
	winner = " User (Most likely Jasor if not you found my easter egg "
}
else if(userInput.toUpperCase() === "MICHAEL") {
	winner = " User (Most likely Jasor if not you found my easter egg) "
}
else if(userInput.toUpperCase() === "DERP") {
	winner = " User (Most likely Jasor if not you found my easter egg) "
}
else {
	winner = " No one "
}
// End of determining

// Displaying results
console.log("Computer Chose: " + computerInput + " " + "You Chose: " + userInput + "" + winner + " " + "has won the game")
window.alert("Computer Chose: " + computerInput + " " + "You Chose: " + userInput + "" + winner + " " + "has won the game")
// End of display

//Reload Script More vars located here
var reloadScript = function(reload) {
	if(reload === true) {
		//reloadTempScript = "To continue please reload the page"
		window.location.reload(true);
	}
	else {
		reloadTempScript = "You have chose not to continue, if you wish to continue reload the page."
		console.log(reloadTempScript)
		window.alert(reloadTempScript)
	}
}

if(confirm("Do you want to keep playing?")) {
	reloadScript(true)
}
else
{
	reloadScript(false)
}
// End Reload Script
