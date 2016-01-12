// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 20-7: Envelope and notes

var osc;

var envelope;

var notes = [
  60, 62, 64, 65, 67, 69, 71, 72
]; 

var note = 0;

function setup() {
  noCanvas();
  osc = new p5.Oscillator();
  osc.setType('sine');
  envelope = new p5.Env(0.01, 0.5, 1, 0.5);
  osc.amp(envelope);
  osc.start();
}

function draw() {
  if (frameCount % 60 == 0) {
    osc.freq(translateMIDI(notes[note]));
    envelope.play(osc);
    note++;
    note = note % notes.length;
  }
}

function translateMIDI(note) {
  return pow(2, ((note-69)/12.0))*440;
}
