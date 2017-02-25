function setup() {
createCanvas(600,600);
background(0, 0, 77);
frameRate (10); //Hastighed

}

function draw() {



fill(0, 0, 77,80); //Den sidste koordinat er transperans
rect(0,0,width,height);


//Tekst
fill(20,102,153);
textSize(40);
text(" Please wait",width/3.3,100);


drawThrobber(11);

}


function drawThrobber(num){

//Den lille prik
push();
translate(width/2,height/2);
var cir = 360/-num*(frameCount%num);
rotate(radians(cir));
noStroke();
fill(255);
ellipse(100,35,22,22);

pop();

//Det cirkulerende blad
push();
translate(width/2,height/2);
var cir = 360/num*(frameCount%num);
rotate(radians(cir));
noStroke();
fill(70,220,100);
ellipse(20,22,30,50);
pop();
  
}