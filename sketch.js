
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var leftrect, bottomrect, rightrect;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);



	engine = Engine.create();
	world = engine.world;

	dustbinObject = new dustbin(1200,650);
	paperObject = new paper(200,450,40);
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
dustbinObject.display();
paperObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:85});
	}
}



