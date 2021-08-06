var canvas = document.getElementById("myCanvas");
var terreno = canvas.getContext("2d");

var motoHeight = 20;
var motoWidth = 10;

var Mx = canvas.width/2;
var My = canvas.height-30;

var direction = 3;

var dx = 5;
var dy = 5;


document.addEventListener("keydown", keyDownHandler, false);


function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        direction = 2;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        direction = 4;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        direction = 1;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        direction = 3;
    }
}

function drawCLU1(){

    terreno.beginPath();
    terreno.rect(dx, dy, motoWidth, motoHeight);
    terreno.fillStyle = "#FFA500";
    terreno.fill();
    terreno.closePath();

}

function drawCLU2(){

    terreno.beginPath();
    terreno.rect(dx, dy, motoHeight, motoWidth);
    terreno.fillStyle = "#FFA500";
    terreno.fill();
    terreno.closePath();

}

function draw(){

    terreno.clearRect(0, 0, canvas.width, canvas.height);
    
    switch (direction) {
        case 1: dy -= 2;
                drawCLU1()
        break;

        case 2: dx += 2;
                drawCLU2()
        break;

        case 3: dy += 2;
                drawCLU1()
        break;

        case 4: dx -= 2;
                drawCLU2()
        break;

        default: break;
    }
    
}

setInterval(draw, 10);