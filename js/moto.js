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

var dx = 5;
var dy = 5;


document.addEventListener("keydown", keyDownHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
}

function drawCLU(){

    terreno.beginPath();
    terreno.rect(dx, dy, motoWidth, motoHeight);
    terreno.fillStyle = "#FFA500";
    terreno.fill();
    terreno.closePath();

}

function draw(){

    terreno.clearRect(0, 0, canvas.width, canvas.height);
    drawCLU();
    
    if(rightPressed) {
        dx += 2;
    }
    else if(leftPressed) {
        dx -= 2;
    }
    else if(upPressed){
        dy -= 2;
    }
    else if(downPressed){
        dy += 2;
    }
    
}

setInterval(draw, 10);