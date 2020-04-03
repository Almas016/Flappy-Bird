function moveUp() {
 	yPos -= 25;
 	fly.play();
}

function draw() {
	context.drawImage(background, 0, 0);
	for(var i = 0; i < pipe.length; i++) {
	 	context.drawImage(pipetop, pipe[i].x, pipe[i].y);
	 	context.drawImage(pipedown, pipe[i].x, pipe[i].y + pipetop.height + gap);

	 	pipe[i].x--;

		if(pipe[i].x == 125) {
		   	pipe.push({
			x : canvas.width,
			y : Math.floor(Math.random() * pipetop.height) - pipetop.height
		 	});
		}
	}
}

var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

var bird = new Image();
var background = new Image();
var foreground = new Image();
var pipetop = new Image();
var pipedown = new Image();
var fly = new Audio();
var score = new Audio();

bird.src = "img/flappy_bird_bird.png";
background.src = "img/flappy_bird_bg.png";
foreground.src = "img/flappy_bird_fg.png";
pipetop.src = "img/flappy_bird_pipeUp.png";
pipedown.src = "img/flappy_bird_pipeBottom.png";
fly.src = "audio/fly.mp3";
score.src = "audio/score.mp3";

var gap = 90;
var xposition = 10;
var yposition = 150;
var gravity = 1.5;
var score = 0;

document.addEventListener("keydown", moveUp);

var pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}