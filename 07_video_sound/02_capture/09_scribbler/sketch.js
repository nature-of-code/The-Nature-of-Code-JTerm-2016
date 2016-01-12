// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-9: The scribbler

// Two global variables
var x;
var y;

function setup() {
  createCanvas(320, 240);
  background(175);
  // Start x and y in the center
  x = width/2;
  y = height/2;
}

function draw() {
  // A new x,y location is picked as the current (x,y) plus or minus a random value. 
  // The new location is constrained within the window's pixels.  
  var newx = constrain(x + random(-20, 20), 0, width);
  var newy = constrain(y + random(-20, 20), 0, height);

  // Draw a line from x,y to the newx,newy
  stroke(0);
  strokeWeight(4);
  line(x, y, newx, newy);

  // Save the new location in (x,y) in order to start the process over again.
  x = newx; 
  y = newy;
}
