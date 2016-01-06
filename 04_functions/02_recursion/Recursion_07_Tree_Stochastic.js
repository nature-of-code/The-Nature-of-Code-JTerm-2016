// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Stochastic Tree
// Renders a simple tree-like structure via recursion
// Angles and number of branches are random

function setup() {
  createCanvas(640, 360);
  newTree();
}

function draw() {
  noLoop();
}

function mousePressed() {
  newTree();
  redraw();
}

function newTree() {
  background(255);
  fill(0);
  text("Click mouse to generate a new tree", 10, height-10);

  stroke(0);
  push();
  // Start the tree from the bottom of the screen
  translate(width/2, height);
  // Start the recursive branching!
  branch(120);
  pop();
}



function branch(h) {
  // thickness of the branch is mapped to its length
  var sw = map(h, 2, 120, 1, 5);
  strokeWeight(sw);
  // Draw the actual branch
  line(0, 0, 0, -h);
  // Move along to end
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.66;

  // All recursive functions must have an exit condition!!!!
  // Here, ours is when the length of the branch is 2 pixels or less
  if (h > 2) {
    // A random number of branches
    var n = int(random(1, 4));
    for (var i = 0; i < n; i++) {
      // Picking a random angle
      var theta = random(-PI/2, PI/2);
      push();      // Save the current state of transformation (i.e. where are we now)
      rotate(theta);     // Rotate by theta
      branch(h);         // Ok, now call myself to branch again
      pop();       // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}

