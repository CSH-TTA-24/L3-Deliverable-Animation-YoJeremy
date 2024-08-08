let yPos = 25;
let r
let g
let b
function setup() {
  createCanvas(500, 500);
  background(0);
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
}

function draw() {
  background(0, 20);

  fill(r,g,b)
  ellipse(250, yPos, 50, 50);

  yPos += 3;

  if (yPos > 525) {
    yPos = -25;
  }
}
function mouseClicked(){
  yPos = -25
  r = random(0,255)
  g = random(0,255)
  b = random(0,255)
}