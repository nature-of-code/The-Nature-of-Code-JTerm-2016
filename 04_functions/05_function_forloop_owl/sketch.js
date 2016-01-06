// Getting Started with p5.js
// Lauren McCarthy, Casey Reas, Ben Fry

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  for (var x = 35; x < width + 70; x += 70) {
    owl(x, 110);
  }
}

function owl(x, y) {
  push();
  translate(x, y);
  stroke(0);
  strokeWeight(70);
  line(0, -35, 0, -65);  // Body
  noStroke();
  fill(255);
  ellipse(-17.5, -65, 35, 35);  // Left eye dome
  ellipse(17.5, -65, 35, 35);   // Right eye dome
  arc(0, -65, 70, 70, 0, PI);   // Chin
  fill(0);
  ellipse(-14, -65, 8, 8); // Left eye
  ellipse(14, -65, 8, 8);  // Right eye
  quad(0, -58, 4, -51, 0, -44, -4, -51); // Beak
  pop();
}