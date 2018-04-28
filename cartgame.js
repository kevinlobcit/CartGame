var difficulty = 1;
var gameTime = 60;
var timer = setInterval(timerFunc, 1000);

var canvas = document.getElementById("gameSpace");

var timerWords = canvas.getContext("2d");


function timerFunc() {
    if(gameTime == -1) {
        gameTime = 60;
        difficulty++;
    }
    timerWords.font = "30px Arial";
    timerWords.strokeText("Time Left: " + gameTime,5,30);
    gameTime--;
}


