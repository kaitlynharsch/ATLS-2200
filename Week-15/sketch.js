let diameter = 150;

function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("sketch");
  //frameRate(1);
}

function draw() {
  diameter = 100*sin(frameCount/100);
  background(100, 0, 100); //rgb
  fill(100);
  stroke(255, 50, 150);
  strokeWeight(5);
  circle(frameCount, height/2, diameter);
  print(frameCount);
}
