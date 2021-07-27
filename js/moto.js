var canvas = document.getElementById("myCanvas");
var terreno = canvas.getContext("2d");

terreno.beginPath();
terreno.rect(0, 0, 5000, 5000);
terreno.fillstyle = "#FF255";
terreno.fill();
terreno.closePath();