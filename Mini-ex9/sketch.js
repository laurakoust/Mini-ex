var weather;

var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=4d7e3ced54af4e221cb0f12394e4974e';

function setup() {
	createCanvas(windowWidth,windowHeight);
	loadJSON(url, gotData);
	
}

function gotData(data){
	//println(data);
	weather = data;
}

function draw() {
	background(0);
	if (weather){
	
		//Temperatur-skala; fra 0-50
		fill(128, 159, 255);
		rect(50,0*10,10,50*10);
		
		//Temperatur-skala; min-max (muligt vejr lige nu)
		var temp_min = weather.main.temp_min;
		var temp_max = weather.main.temp_max;
		fill(255, 102, 179);
		rect(50,temp_min*10,10, temp_max*10);
		
		
		//Temperatur-cirkel. Jo større, jo varmere - samt placering på skala vil vise temp.
		var temp = weather.main.temp;
		fill(255, 255, 0);
		ellipse(55,temp*10, temp*3, temp*3);
		
		//Fugtigheds-sky. Jo større sky, jo fugtigere. 
		var humidity = weather.main.humidity; 
		fill(0, 153, 255);
		noStroke();
		ellipse(400,300, humidity*3, humidity*3); //Midter-sky
		ellipse(400+humidity*2,300, humidity*3, humidity*3); //Sky nederst højre
		ellipse(400-humidity*2,300, humidity*3, humidity*3); //Sky nederst venstre
		ellipse(400-humidity,300-humidity*1.5, humidity*2, humidity*2); //Sky øverst venstre
		ellipse(400+humidity,300-humidity*2, humidity*3, humidity*3); //Sky øverst højre
		

		
		
	}
  
}