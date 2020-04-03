var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

var bird = new Image();
var background = new Image();
var foreground = new Image();
var pipetop = new Image();
var pipedown = new Image();

bird.src = "ing/flappy_bird_bird.png";
background.src = "ing/flappy_bird_bg.png";
foreground.src = "ing/flappy_bird_fg.png";
pipetop.src = "ing/flappy_bird_pipeUp.png";
pipedown.src = "ing/flappy_bird_pipeBottom.png";

var gap = 90;
var xposition = 10;
var yposition = 150;
var gravity = 1;

function draw(){
	context.drawImage(background, 0, 0);
	context.drawImage(pipetop, 100, 0);
	context.drawImage(pipedown, 100, 0 + pipetop.height + gap);
	context.drawImage(foreground, 0, canvas.height - foreground.height);
	context.drawImage(bird, xposition, yposition);

	yposition += gravity;
	requestAnimationFrame(draw);
}
pipedown.onload = draw;