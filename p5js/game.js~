var ballX= 5;
var ballY=5;
var barX=100;
var barY=460;
var standX=350;
var standY=395;
var ballXspeed=5;
var ballYspeed=5;
var bg;
var sprite;
var x=740;
var y=435;

var bg1; 
var score=0;

function setup () {
	createCanvas (800,500);
	bg=loadImage("canvas1.png");
	bg1=loadImage("GAMEOVER.svg");
	sprite=loadImage("ball.png");
 
	
}
function draw () {
	clear();	
	background (bg);
	textSize(30);
	fill(0,0,255);
	text("score",100,200);
	text(score,200,200);
	
	rect (5,5,5,5);
	// bar
	fill(0,255,0);
	rect (barX,barY,60,30);
	// stand
	fill(0,0,255);
	rect(standX,standY,50,100);
	// ball image
	image(sprite,ballX, ballY,50,50);
	ballX=ballX+ballXspeed;
	ballY=ballY+ballYspeed;
	
	
	//line(ballX + 25, ballY + 45, barX + 30, barY )
	// calculate the distance between the ball and the green bar
	var distance = dist(ballX + 25, ballY + 50, barX + 30, barY );
	 if (distance <= 20){
		ballYspeed *= -1;
	}
	 //calculate the distance between the ball and the blue stand
	var distance = dist(ballX + 25, ballY + 50, standX + 25, standY );
	//line(ballX + 25, ballY + 45, standX + 30, standY );
	if (distance <= 20){
		ballYspeed *= -1;
		score=score+10;
	}
	var distance = dist(ballX + 25, ballY + 50, standX + 50, standY + 60 );
	if (distance <= 25){
		//ballXspeed *= -1;
		ballYspeed *= -1;
		
		score=score+10;
	}
	//var distance = dist(ballX + 25, ballY + 50, standX, standY + 50);
	//if (distance <= 25){
		//ballXspeed *= -1;
		//ballYspeed *= -1;
		//score=score+10;
	//}
	var distance = dist(ballX + 25, ballY + 50, barX + 60, barY + 15);
	if (distance<=20){
		ballYspeed *= -1;
		
	}
	var distance = dist(ballX + 25, ballY + 50, barX, barY + 15);
	if (distance<=20){
		ballYspeed *= -1;
	}
	
	// keeping the bar inside the canvas
	if (barX < 0){
		barX = barX + 20;
 	}
	if(barX > width - 60){
		barX = barX - 20;
	}

  
	if (ballY < 0){
		ballYspeed *= -1;
	}
	if (ballX < 0 || ballX > width - 50 ){
		ballXspeed *= -1;
	}
	// control the bar using the arrows
	if (keyIsDown(RIGHT_ARROW)){
		barX= barX+10;
	}
	if (keyIsDown(LEFT_ARROW)){
		barX= barX-10;
	}
if (ballY > height){
	clear();
	background(bg1);
	reload;
	}
        
}




	

