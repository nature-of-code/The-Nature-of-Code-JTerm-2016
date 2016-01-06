# The Nature of Code, NYUAD, JTerm 2016, NYC

Can we capture the unpredictable evolutionary and emergent properties of nature in software? Can understanding the mathematical principles behind our physical world world help us to create digital worlds? This class focuses on the programming strategies and techniques behind computer simulations of natural systems. We explore topics ranging from basic mathematics and physics concepts to more advanced simulations of complex systems. Subjects covered include forces, trigonometry, fractals, cellular automata, self-organization, and genetic algorithms. No computer programming experience is required, the course will start with the basics of code using HTML, CSS, and JavaScript (with the [p5js](http://p5js.org/) framework). In addition to learning technical skills and discussing scientific concepts, students will have the opportunity to visit science museums, art galleries, and artist studios in the NYC area. 

* Daniel Shiffman, daniel dot shiffman at nyu dot edu
* Course Number: COREA-AD 17J (Cross-listed with Interactive Media and Technology)
* Meets daily: 10am - 1pm
* Office hours daily: 2pm - 3pm (and by appointment via e-mail)
* Credit Hours 4
* [Class google group for discussion / questions / announcements](https://groups.google.com/a/itp.nyu.edu/group/nature-of-code-abu-dhabi?hl=en)
* [Homework wiki](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/wiki)
* [p5.js web site](http://p5js.org)
* [p5.js web editor](http://p5ide.herokuapp.com/editor)
* [p5.js web editor github](https://github.com/therewasaguy/p5js-webIDE)

## Field Trips
* [Museum of Math](http://momath.org/) - Friday, Jan 8, details TBA
* [American Museum of Natural History](http://www.amnh.org/) - Tuesday, Jan 12, details TBA
* [New York Hall of Science](http://nysci.org/) - Friday, Jan 15 -- meet at the museum at 1:45pm.
* [Eyebeam Art and Technology Center](http://eyebeam.org/) -- Tues, Jan 19
* Possibly more TBA

## Class 1 -- Introduction -- Monday, Jan 4
* Meets 2-4:30pm today (as to not conflict with morning orientation).
* What is computational media?
  * What is programming?
  * How can I apply programming to my field of interest?
  * [Example projects](https://github.com/ITPNYU/ICM-2015/wiki/Projects).
  * What is the potential for software within the visual arts?
  * As a ____________, why would I want or need to write software?
* Programming language discussion
  * General discussion of programming languages
  * History of creative coding frameworks
      * Processing and p5.js (and what's processing.js?): [What is p5.js video](https://vimeo.com/channels/learningp5js/137979313)
      * openframeworks, cinder
      * max/msp dataflow programming
      * How does arduino fit in?
* p5.js in the context of the browser
  * Landscape of HTML, CSS, and JavaScript
  * Other JS frameworks
  * Server-side vs. client-side
  * What is the difference between p5 and JavaScript?
  * Development options -- [p5.js web IDE](https://github.com/therewasaguy/p5js-webIDE), [p5.js desktop IDE](https://github.com/processing/p5.js-editor), [your own local server](https://github.com/processing/p5.js/wiki/Local-server)
  * Though this will be unnecessary since we are using the web IDE, you might also want to check out [how to upload](https://github.com/ITPNYU/ICM-2015/wiki/SFTP-Tutorial)
* Participating in an open-source community
  * What are git and github?
  * When should you post to a forum vs. file a github issue?
  * Who makes these things?
* Basics of blogging
  * Introduction to wordpress
  * Your blog is at yournetid.nyuad.im/blog.  Follow the install instructions at that link (it should be fairly self explanatory).  If you are stuck you can watch this [video walkthrough](https://www.dropbox.com/s/mz1tt4guamnmgl9/wordpress.mov?dl=0).
  * [If you want to get a bit more into wordpress, you can start here](http://codex.wordpress.org/First_Steps_With_WordPress).
* Supplemental Reading / Watching
  * Read p. 8-41 of Form + Code
  * Getting Started with p5.js: Chapters 1-3
  * [Videos 1.0-1.3](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)

## Class 2 -- Drawing and Animation -- Tues, Jan 5
  * Drawing
    * [Examples](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/tree/master/01_drawing)
    * Drawing with numbers: [video tutorial](https://vimeo.com/channels/learningp5js/137979314)
    * Shape and color functions: [video tutorial](https://vimeo.com/channels/learningp5js/137979312)
    * [Sol Lewitt](http://www.massmoca.org/lewitt/)
  - Program flow (what's a function?)
    - Setup, draw, and other events
    - Variation: mouseX and mouseY
    - [video tutorial](https://vimeo.com/channels/learningp5js/138327548)
  - More about variables
    - make your own variables (numbers and strings), [video tutorial](https://vimeo.com/channels/learningp5js/138331676)
    - JS objects (variables inside variables), [video tutorial](https://vimeo.com/channels/learningp5js/138327558)
  - [random()](http://p5js.org/reference/#/p5/random), [video tutorial](https://vimeo.com/channels/learningp5js/138327559)
  - [map()](http://p5js.org/reference/#/p5/map), [video tutorial](https://vimeo.com/channels/learningp5js/138331801)
  - [Transformations](http://www.genekogan.com/code/p5js-transformations/)
  * [Reading / Homework]](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/wiki/Assignment-1)

## Class 3 -- Interaction and Functions -- Wed, Jan 6
 - Conditional Statements
    - Boolean expressions
    - if statement
    - relational operators
    - [video tutorial](https://vimeo.com/channels/learningp5js/138935676)
    - Case study, bouncing ball: [video tutorial](https://vimeo.com/channels/learningp5js/138935675)
    - else, else if, and, or [video tutorial](https://vimeo.com/channels/learningp5js/138935678)
    - buttons, rollovers, switches [video tutorial](https://vimeo.com/channels/learningp5js/138935677)
  - Loops (while and for)
    - while and for [video tutorial](https://vimeo.com/channels/learningp5js/139013336)
    - nested loops [video tutorial](https://vimeo.com/channels/learningp5js/139013372)
  - Functions
    - Calling vs. defining
    - Modularity: [video](https://vimeo.com/channels/learningp5js/139587733)
    - Arguments and parameters
    - Re-usability: [video](https://vimeo.com/channels/learningp5js/139587732)
    - Return types: [video](https://vimeo.com/channels/learningp5js/139587730)
    - Functions inside objects: [video](https://vimeo.com/channels/learningp5js/139587731)
    - Recursion
      - [Fractals](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp08_fractals)
  - More on randomness and perlin noise
  - Intro to Objects
  * [Reading / Homework](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/wiki/Assignment-2)

## Class 4 -- Objects and Reproduction -- Thurs, Jan 7
- Modulo
- [Objects](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp08_objects)
  - Principles and Theory (Encapsulation)
  - JS literal object
  - Object "constructor" function
* [Homework 4](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/wiki/Assignment-3)

## Class 5 -- Museum of Math Field Trip -- Fri, Jan 8

## Class 6 -- Arrays and Loops -- Mon, Jan 11
- [Review loops](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp06_loops)
  - while
  - for
- [Arrays](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp09_arrays)
   - Resizing an array
   - Other array functions
- [A String is like an array of characters](http://shiffman.net/teaching/a2z/week1/#strings) 
- [An image is like an array of pixels](http://p5js.org/reference/#/p5/pixels[]) 
- Related Reading
    - Chapters 6 and 9 from Learning Processing cover the same concepts in the Java programming language.
    - [Array tutorial from Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#Arrays)
    - [Array tutorial from JQuery](https://learn.jquery.com/javascript-101/arrays/)
    - For a JavaScript tutorial about arrays I would suggest [Chapter 4 of Eloquent JavaScript](http://eloquentjavascript.net/04_data.html) though I would warn that it gets a bit more advanced than what we need for p5.js sketches.    
* [Homework 5](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/wiki/Assignment-4)

## Class 7 -- AMNH field trip -- Tues, Jan 12

## Class 8 -- Images and Pixels -- Wed, Jan 13
- There are video lessons in progress about these topics in Processing.  They cover all the same content but the syntax in JavaScript is different.  [Videos 15.0 - 15.9](http://icm.shiffman.net/15.0/)
- Images
    - Load and display images
    - Writing pixels to screen
    - Reading image pixels, image processing: brightness, threshold, etc
    - [Chapter 15 examples](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp15_images_pixels)
    - In class exercise: make an interactive image processing filter
- Video: 
    - Live video (Capture) and movie playback (Movie)
    - Drawing shapes on screen colored by pixels
    - [Chapter 16 examples](https://github.com/shiffman/LearningProcessing-p5.js/tree/master/chp16_video)
    - Exercise: Make a mirror that paints your portrait
- Intro to Computer Vision
- Related reading:
    - [Computer Vision for Artists and Designers by Golan Levin](http://www.flong.com/texts/essays/essay_cvad/)
    - Learning Processing, Chapters 15-16
* Homework 6

## Class 9 -- Data -- Thurs, Jan 14
* Intro to Data
  * review events and callbacks
* [Loading local files](https://github.com/shiffman/itp-networked-media/tree/master/week4/01_loading_files)
* Query strings
* Web services: AJAX, JSON, and APIs
  * [Simple JSON examples](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/tree/master/examples/10_data/00_localfiles)
  * [API examples](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/tree/master/examples/10_data/01_external_data)
  * [List of possible data sources](https://github.com/ITPNYU/ICM-2014/wiki/Data-Links)
  * [p5.js notes: Loading-external-files:-AJAX,-XML,-JSON](https://github.com/lmccart/p5.js/wiki/Loading-external-files:-AJAX,-XML,-JSON)
  * [Robyn's Instagram API How To](https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to)
* Homework 7

## Class 10 -- Queens Hall of Science -- Friday, Jan 15
* 10am-12pm: Intro to Physics
  * [Vectors](http://natureofcode.com/book/chapter-1-vectors/)
  * [Forces](http://natureofcode.com/book/chapter-2-forces/)
  * [Physics Libraries](http://natureofcode.com/book/chapter-5-physics-libraries/)
  * Additional Reading
    * Computational Beauty of Nature: introduction
    * Computational Beauty of Nature: Chapter 16
    * There are also the [Nature of Code videos](https://vimeo.com/channels/natureofcode).
  * [All examples](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js)
  * [Related and past projects](https://github.com/shiffman/The-Nature-of-Code-S14/wiki/Nature-of-Code-Related-and-Past-Projects)
* 2pm: Meet at Queens Hall of Science
* Homework 8

## Class 11 --  Complexity (Agents, Fractals, CA, Evolution) -- Tuesday, Jan 19
* **Meet at Eyebeam Art and Technology Center, details TBA**
* Complex Systems:
  * [Autonomous Agents](http://natureofcode.com/book/chapter-6-autonomous-agents/), [Example code](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp06_agents)
  * [Cellular Automata](http://natureofcode.com/book/chapter-7-cellular-automata/), [Example code](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp07_CA)
  * [Fractals](http://natureofcode.com/book/chapter-8-fractals/), [Example code](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp08_fractals)
* Reading:
  * [Craig Reynolds Steering Behavior](http://www.red3d.com/cwr/steer/)
  * Computational Beauty of Nature: Chapter 5-6, 15, 20
* [Create a final project proposal](https://github.com/shiffman/The-Nature-of-Code-JTerm-2015/wiki/Project-Proposal)

## Class 12 - Final Project Proposals and Workshop - Wed, Jan 20
* Evolutionary Computing:
  * [Introduction to Genetic Algorithms](http://natureofcode.com/book/chapter-9-the-evolution-of-code/)
  * [Example code](https://github.com/shiffman/The-Nature-of-Code-Examples-p5.js/tree/master/chp09_ga)
* [Final Project Proposal schedule TBA](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/wiki/Project-Proposal)

## Class 13 - Final Project Workshop and Presentations -- Thurs, Jan 21
* [Schedule TBA](https://github.com/shiffman/The-Nature-of-Code-JTerm-2016/wiki/Final-Project-Workshop)

## Class 14 - Final Project Breakfast - Friday, Jan 22
* 9:30 - 11:30: breakfast and exhibiton

## Expectations
* Assignments will include readings, programming exercises, and written documentation of your work.
* Each student will be required to post their homework to the class blog (instructions provided in class).
* Over the course of the term, you should have completed ten blog posts (8 exercises, 1 final project proposal, 1 final project summary). In total this should amount to at least 7,000 words (equivalent to 18 double-spaced pages.) Each blog post should contain a written response to material presented in class (specific questions will be provided), a description of your homework assignment, and questions regarding the technical material.
* For your final project proposal and summary, you will be required to write about your project concept and project development process.
* Students will be expected to collaborate, to document their work, to make presentations and to discuss their ideas regularly in class.

## Teaching Methodologies
* Class time will be divided between technical lectures, independent project development, individual meetings with instructor, and project presentations / critique.
* In addition to regular class meetings, the instructor will organize a series of field trips to visit artist studios, gallery shows, and museum exhibits in the London area.

## Learning Outcomes
* Define the fundamentals of computation.
* Build creative software sketches that demonstrate knowledge of these fundamentals.
* Critically examine interactive art in the context of screen, sculpture, and web.
* Apply concepts from physics and mathematics to real-time software animation.
* Develop methodologies for simulating nature using computational algorithms.
* Propose and build a creative project made from computational methods.

## Grading
* Class Participation (attendance, discussions, project proposal and implementation presentations) : 25%
* Writing Assignments: 25%
* Programming Assignments: 35%
* Final Project: 15%

## Presenting in class
* One liner – What did you do?
* Content – Why did you do it? Who is the audience? How does it engage with the theoretical and technical concerns we have discussed in this class?
* Demo
* Comments/Critique

## Books
* The Nature of Code, Daniel Shiffman
* The Computational Beauty of Nature, Gary Flake
* Form + Code, Casey Reas / Chandler McWilliams
* Make: Getting Started with p5.js: Making Interactive Graphics in JavaScript and Processing, Lauren McCarthy, Casey Reas, Ben Fry
