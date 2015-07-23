var ballX=400;
var ballY=10;
var barX=100;
var barY=460;
var standX=350;
var standY=395;
var ballXspeed=1000;
var ballYspeed=1000;
var bg;
var sprite;
var x=740;
var y=435;
var colorOfBar;
var colorOfStand;
var colorOfSprite;
var bg1;

function setup () {
	createCanvas (800,500);
	bg1=loadImage("GAMEOVER.svg");
	bg=loadImage("canvas1.png");
	sprite=loadImage("ball.png");
	
}
function draw () {
	//clear();	
	//background (bg);
	background (bg1);
	
	// bar
	fill(0,255,0);
	rect (barX,barY,60,30);
	// stand
	fill(255,0,0);
	rect(standX,standY,50,100);
	// ball image
	image(sprite,ballX, ballY,30,20);
	ballX=ballX+ballXspeed;
	ballY=ballY+ballYspeed;
	
	// getting the colors green bar, red bar and the edge of the ball
	var colorOfSprite = get(ballX + 25, ballY + 48);
	var colorOfBar = get(barX + 30, barY + 10);
	var colorOfstand = get(standX + 25, standY + 100);	
	ellipse(ballX + 25, ballY + 48, 5, 5);
	ellipse(barX + 30, barY + 0, 5, 5);
	ellipse(standX + 25,standY + 0, 5, 5);
	ellipse(barX + 60, barY + 15, 5, 5);
	// comparing color of green bar,red stand & edge of ball
	console.log(colorOfSprite.join());	
	if (colorOfBar.join() === colorOfSprite.join()){
		
		ballYspeed *= -1;	
		}
	
	if (colorOfstand.join() === colorOfSprite.join()){
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
	if (ballY>800){
		clear();
		background(bg1);
		noLoop;
	}
}




	

