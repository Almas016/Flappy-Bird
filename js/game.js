var canvas = document.getElementById("main");
var context = canvas.getContext("2d");

var bird = new Image();
var background = new Image();
var foreground = new Image();
var pipetop = new Image();
var pipedown = new Image();
var fly = new Audio();
var scoremp3 = new Audio();

bird.src = "img/flappy_bird_bird.png";
background.src = "img/flappy_bird_bg.png";
foreground.src = "img/flappy_bird_fg.png";
pipetop.src = "img/flappy_bird_pipeUp.png";
pipedown.src = "img/flappy_bird_pipeBottom.png";
fly.src = "audio/fly.mp3";
scoremp3.src = "audio/score.mp3";

var gap = 90;

document.addEventListener("keydown", moveUp);

function moveUp() {
 	yposition -= 25;
 	fly.play();
}

var pipe = [];

pipe[0] = {
 	x : canvas.width,
 	y : 0
}
var xposition = 10;
var yposition = 150;
var gravity = 1.5;
var score = 0;

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
		if(xposition + bird.width >= pipe[i].x 
			&& xposition <= pipe[i].x + pipetop.width 
			&& (yposition <= pipe[i].y + pipetop.height
			|| yposition + bird.height >= pipe[i].y + pipetop.height + gap) 
			|| yposition + bird.height >= canvas.height - foreground.height) {
		 	location.reload();
		}
		if(pipe[i].x == 5) {
		 	score++;
		 	scoremp3.play();
		}
	}

	context.drawImage(foreground, 0, canvas.height - foreground.height);
	context.drawImage(bird, xposition, yposition);

	yposition += gravity;

	context.fillStyle = "#000";
	context.font = "24px Verdana";
	context.fillText("Счет: " + score, 10, canvas.height - 20);
	requestAnimationFrame(draw);
}
pipedown.onload = draw;