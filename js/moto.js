var canvas = document.getElementById("myCanvas");
var terreno = canvas.getContext("2d");

var motoHeight = 20;
var motoWidth = 10;

var Mx = canvas.width/2;
var My = canvas.height-30;

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

var dx = 0;
var dy = -2;

//document.addEventListener("keydown", keyDownHadler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        rightPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        leftPressed = true;
    }
}

function drawCLU(){

    terreno.beginPath();
    terreno.rect(Mx, My, motoWidth, motoHeight);
    terreno.fillStyle = "#FFA500";
    terreno.fill();
    terreno.closePath();

}

function draw(){

    terreno.clearRect(0, 0, canvas.width, canvas.height);
    drawCLU();
    Mx += dx;
    My += dy;

    

}

setInterval(draw, 10);