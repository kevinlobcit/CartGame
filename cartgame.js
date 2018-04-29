var startButton = document.createElement("Button");
startButton.innerHTML = "Start Game";

var gameStarted = 0;

var difficulty = 1;
var gameTime = 60; //The game time per round until difficulty increases
var timer; //used as the variable for the time counter

var canvas = document.getElementById("gameSpace");

var timerWords = canvas.getContext("2d");

function timerStart() { //used to start the timer when the canvas is clicked
    if(gameStarted == 0) {
        gameStarted = 1;
        timer = setInterval(timerFunc, 1000);
    }  
}

function timerFunc() { //is the timer
    timerWords.clearRect(0,0,150,25);  
    if(gameTime == -1) {
        gameTime = 60;
        difficulty++;
    }
    timerWords.font = "20px Verdana";
    timerWords.strokeText("Time Left: " + gameTime,5,20);
    gameTime--;
}



