var tekst1 = [];
var tekst2 = [];

function preload() {
  tekst1 = loadStrings('data/positive.txt');
  tekst2 = loadStrings('data/negative.txt');
  
}

function setup() {
  createCanvas(600,600);
}
  
function draw() {

  background(128,255,204);
  textSize(50);
  
  fill(255, 255, 102);
  var ind = floor(random(tekst1.length));
  text(tekst1[0], 20, 100, 500, 500);
  
	fill(0, 115, 230);
  var ind = floor(random(tekst2.length));
text(tekst2[0], 20, 300, 500, 500);
 
 }
 
 function mousePressed(){
 	shuffle(tekst1,true);

}
 
 function keyPressed(){
  	shuffle(tekst2,true);
 
 
 }
 
