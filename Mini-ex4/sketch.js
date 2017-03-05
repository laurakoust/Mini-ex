function setup() {
	createCanvas(600,600);
	background(150,120,180);

}

function draw() {

	dots(75,50); //Afstand og størrelse på kugler


}

function dots(distance, dotssize){ //Kuglerne
	for (var i = 0; i <= width+10; i+=distance){ //Laver forloop
		fill(100,random(255),150); //Styrer nuancerne ved kun at randomize den ene
		stroke(0);
		ellipse(i,mouseY,50,50); //Skal følge musen ved y-koordinaten

}
}

function keyPressed() {   //Udviskning
	
   if (keyCode == 38) {  //op
		fill(150,120,180);
		noStroke();
		rect(0,0,600,300); //Den øverste halvdel 'slettes'

   }else if (keyCode == 40){ //ned
   		fill(150,120,180);
   		noStroke(0);
   		rect(0,300,600,300); //Den nederste halvdel 'slettes'
   		}
   				
   		
   	else if (keyCode == 37){ //venstre - hveranden 'slettes'
   		fill(150,120,180);
   		noStroke(0);
   		rect(0,0,30,600); //nr 1
   		rect(120,0,60,600); //nr 3
   		rect(270,0,60,600); //nr 5
   		rect(420,0,60,600); //nr 7
   		rect(560,0,60,600); //nr 9
   		}
   		
   	else if (keyCode == 39){ //højre - hveranden 'slettes'
   		fill(150,120,180);
   		noStroke(0);
   		rect(40,0,65,600); //nr2
   		rect(190,0,65,600); //nr4
   		rect(345,0,60,600); //nr6
   		rect(490,0,65,600); //nr8
   		}
   		}
   