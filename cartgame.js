var startButton = document.createElement("Button");
startButton.innerHTML = "Start Game";

var fullscreen = 0;
var fulScrnBtn = document.getElementById("fulscrnBtn");


var gameStarted = 0; //use to prevent the start of more timers after clicking the game once

var difficulty = 1;
var gameTime = 60; //The game time per round until difficulty increases
var timer; //used as the variable for the time counter

var canvas = document.getElementById("gameSpace");

var timerWords = canvas.getContext("2d");

function goFullscreen() {
    if(fullscreen == 0) {
        var docElm = document.documentElement;
        if(docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        else if(docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        else if(docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
        else if(docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
        fulScrnBtn.innerHTML = "Exit Fullscreen";
        fullscreen = 1;
    }
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fulScrnBtn.innerHTML = "Enter Fullscreen";
        fullscreen = 0;
    }
}

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



