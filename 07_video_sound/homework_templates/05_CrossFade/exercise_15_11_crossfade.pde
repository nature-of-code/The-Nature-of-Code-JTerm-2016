// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Exercise 15-11: Using the framework established by our image processing examples, create 
// two images as input and generates one output image. In other words, each 
// pixel displayed should be a function of the color values from two pixels, one from one image 
// and one from another. For example, can you write the code to blend two images together 
// (without using tint())? 

// Two source images
PImage source0;      // Source image 1
PImage source1;      // Source image 2

// A percentage (10% one image, 90% the other, etc.  starts at 0%);
float p = 0;

void setup() {
  size(200, 200);
  source0 = loadImage("animal0.jpg");
  source1 = loadImage("animal1.jpg");
}

void draw() {
  // Percentage goes from 0 to 1 then back to 0
  p += 0.01;
  if (p > 1.0) p = 0;

  loadPixels();
  // We are going to look at both image's pixels
  source0.loadPixels();
  source1.loadPixels();

  for (int x = 0; x < source0.width; x++ ) {
    for (int y = 0; y < source0.height; y++ ) {
      int loc = x + y*source0.width;
      // Two colors
      color c0 = source0.pixels[loc];
      color c1 = source1.pixels[loc];

      // Separate out r,g,b components
      float r0 = red(c0); 
      float g0 = green(c0); 
      float b0 = blue(c0);
      float r1 = red(c1); 
      float g1 = green(c1); 
      float b1 = blue(c1);

      // Combine each image's color
      float r = p*r0+(1.0-p)*r1;
      float g = p*g0+(1.0-p)*g1;
      float b = p*b0+(1.0-p)*b1;

      // Set the new color
      pixels[loc] = color(r, g, b);
    }
  }

  updatePixels();
}
