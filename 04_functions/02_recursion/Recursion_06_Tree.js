// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Recursive Tree
// Renders a simple tree-like structure via recursion
// Branching angle calculated as a function of horizontal mouse location

var theta;   

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);
  // Let's pick an angle 0 to 90 degrees based on the mouse position
  theta = map(mouseX,0,width,0,PI/2);

  // Start the tree from the bottom of the screen
  translate(width/2, height);
  stroke(0);
  branch(120);
}

function branch(len) {
  // Each branch will be 2/3rds the size of the previous one

  //var sw = map(len,2,120,1,10);
  //strokeWeight(sw);
  strokeWeight(2);
      
  line(0, 0, 0, -len);
  // Move to the end of that line
  translate(0, -len);

  len *= 0.66;
  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (len > 2) {
    push();    // Save the current state of transformation (i.e. where are we now)
    rotate(theta);   // Rotate by theta
    branch(len);       // Ok, now call myself to draw two new branches!!
    pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-theta);
    branch(len);
    pop();
  }
}

