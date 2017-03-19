var numParticles = 15; //Antal "tegninger"
var stepsIteration = 75; //Gentagelser (jo højere, jo flere, jo hurtigere)
var stepsToChange = 5;   // 1 < x < stepsIteration, afgør "længden" på krussedelle-stregerne

var pos = [];
var addVec;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(225,20); 
  for(var i=0; i<numParticles; i++){
    pos[i] = createVector(random(width), random(height));
  }
} 

function draw() {
  noStroke();
  fill(255, 179, 255); 
  for(var i=0; i<numParticles; i++){
    for(var j=0; j<stepsIteration; j++){
      (j % stepsToChange == 0) ? addVec = p5.Vector.random2D(): null;
      pos[i].add(addVec);
      ellipse(pos[i].x, pos[i].y,3,3);
    }
  }
}
