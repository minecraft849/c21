var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var ball_options={
		restitution:0.3,
		density:1.2,
		isStatic:false,
		friction:0,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Matter.Bodies.circle(5,5,5);
    groundObj = new ground(width/2,670,width,20);
	leftside= new ground(1100,600,20,120);
	Engine.run(engine);
  
}

function keypressed() {
	if (keycode === UP_ARROW) {
		Matter.Body.applyforce(ball, ball.position);
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
  leftside.display();
}



