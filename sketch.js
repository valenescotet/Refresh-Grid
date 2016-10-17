var circles = [];
var startColor;
var endColor;
var bgColor;
var counter;

function setup () {
  createCanvas(500, 500);
  startColor = color(255,255,0,10);
	endColor = color(255,0,127,10);
	counter = +.5;
	bgColor = lerpColor(startColor, endColor, counter);
  for (var i=0; i < 10; i++) {
    circles.push(random(width));

  }
}

function draw (){

  fill(0,255,255,90)
	background(bgColor);
  	counter = counter + .01;
  bgColor = lerpColor(startColor, endColor, counter%1); 
  for (var i=0; i< circles.length; i++){
    noStroke();
    ellipse (circles[i], 0, 20,10);
    ellipse (circles[i], 20, 20,10);
    ellipse (circles[i], 40, 20,10);
    ellipse (circles[i], 60, 20,10);
    ellipse (circles[i], 80, 20,10);
    ellipse (circles[i], 100, 20,10);
    ellipse (circles[i], 120, 20,10);
    ellipse (circles[i], 140, 20,10);
    ellipse (circles[i], 160, 20,10);
    ellipse (circles[i], 180, 20,10);
    ellipse (circles[i], 200, 20,10);
    ellipse (circles[i], 220, 20,10);
    ellipse (circles[i], 240, 20,10);
    ellipse (circles[i], 260, 20,10);
    ellipse (circles[i], 280, 20,10);
    ellipse (circles[i], 300, 20,10);
    ellipse (circles[i], 320, 20,10);
    ellipse (circles[i], 340, 20,10);
    ellipse (circles[i], 360, 20,10);
    ellipse (circles[i], 380, 20,10);
    ellipse (circles[i], 400, 20,10);
    ellipse (circles[i], 420, 20,10);
    ellipse (circles[i], 440, 20,10);
    ellipse (circles[i], 460, 20,10);
    ellipse (circles[i], 480, 20,10);
    ellipse (circles[i], 500, 20,10);
    circles [i] =circles [i] + 1
  }
   for (var i=0; i< circles.length; i++){
    ellipse (0, circles[i], 10,20);
    ellipse (20, circles[i], 10,20);
    ellipse (40, circles[i], 10,20);
    ellipse (60, circles[i], 10,20);
    ellipse (80, circles[i], 10,20);
    ellipse (100, circles[i], 10,20);
    ellipse (120, circles[i], 10,20);
    ellipse (140, circles[i], 10,20);
    ellipse (160, circles[i], 10,20);
    ellipse (180, circles[i], 10,20);
    ellipse (200, circles[i], 10,20);
    ellipse (220, circles[i], 10,20);
    ellipse (240, circles[i], 10,20);
    ellipse (260, circles[i], 10,20);
    ellipse (280, circles[i], 10,20);
    ellipse (300, circles[i], 10,20);
    ellipse (320, circles[i], 10,20);
    ellipse (340, circles[i], 10,20);
    ellipse (360, circles[i], 10,20);
    ellipse (380, circles[i], 10,20);
    ellipse (400, circles[i], 10,20);
    ellipse (420, circles[i], 10,20);
    ellipse (440, circles[i], 10,20);
    ellipse (460, circles[i], 10,20);
    ellipse (480, circles[i], 10,20);
    ellipse (500, circles[i], 10,20);
    circles [i] =circles [i] + 1
  }
}
