var radio;
var slider;
var button;
var button;
var checkbox;

function setup(){
	
	//ØJE AF SLIDER
	slider = createSlider(0,255,100);
	slider.position(180,220);
	slider.style('width','80px');
	
	//ØJE AF KNAP
	button = createButton('No poking');
	button.position(340,220);
	
	//NÆSE AF CHECKBOX
	checkbox = createCheckbox(' ', false);
	checkbox.position(290,320);
	
	//MUND AF RADIOS
	radio = createRadio();
	radio.option(' ', 'Hello');
	radio.option(' ', 'The weather is nice');
	radio.option(' ', 'Ooh, you look beautiful');
	radio.option(' ', 'What is that between your teeth?');
	radio.option(' ','Stop touching my face!');
	radio.option(' ','I think I like you');	
	radio.option(' ','How are you?');
	radio.option(' ','Theres something behind you.. dont look!');
	radio.option(' ','Nope. Nothings happening when you play with my eyes..');
	radio.option(' ','What I want for christmas is yoooouuuu');
	radio.option(' ','How do you like your eggs?');
	
	textAlign(CENTER);
	radio.position(width/0.6,400);
	

}


function draw(){
	createCanvas(windowWidth,windowHeight);
	background(255, 204, 255);
	var val = radio.value(); //Den tekst (value) der er skrevet i de forskellige radios, kalder vi val
	if (val){
		text(' '+val, 30, 150); //Når der klikkes, skriver den, den tilhørende value/tekst
	}
	

}
