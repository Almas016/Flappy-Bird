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