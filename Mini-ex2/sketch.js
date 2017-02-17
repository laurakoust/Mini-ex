function setup() {
createCanvas(500,500);
background(203,255,250);

}

function draw() {

 if (mouseIsPressed){
 	fill(203,255,250);
    rect(0,0,500,500);
    }

  else{
fill(255);
ellipse(250,250,200,240);
ellipse(220,190,30,20);
ellipse(280,190,30,20);
fill(200,200,200);
triangle(240,250,250,235,260,250);
fill(255);
arc(250, 290, 60, 60, 0, PI+QUARTER_PI, OPEN);
line(250, 370, 250, 390);
fill(238,130,238);
triangle(220,445,250,390,280,445);
line(240, 445, 240, 460);
line(240, 460, 230, 460);
line(260, 445, 260, 460);
line(260, 460, 270, 460);
line(263, 415, 275, 400);
line(236, 415, 225, 400);
fill(255,215,0)
triangle(240,135,250,100,260,135);
triangle(225,135,235,100,245,135);
triangle(255,135,265,100,275,135);
}



}

