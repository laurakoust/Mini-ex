function setup() {
createCanvas(500,500);
background(203,255,250);

}

function draw() {
fill(255);
ellipse(250,250,200,240);
fill(141,86,125);
ellipse(220,190,30,20);
ellipse(280,190,30,20);
fill(200,200,200);
triangle(240,250,250,235,260,250);
fill(255);
arc(250, 290, 60, 60, 0, PI+QUARTER_PI, OPEN);
line(250, 370, 250, 390);
triangle(220,445,250,390,280,445);
line(240, 445, 240, 460);
line(260, 445, 260, 460);
  
}