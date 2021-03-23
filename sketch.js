
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	roof = new Roof(350, 300, 250, 30);

	bob1 = new Bob(250, 500, 50);	
	bob2 = new Bob(300, 500, 50);	
	bob3 = new Bob(350, 500, 50);	
	bob4 = new Bob(400, 500, 50);	
	bob5 = new Bob(450, 500, 50);	

	rope1 = new Rope(bob1.body, roof.body, -99, 0);
	rope2 = new Rope(bob2.body, roof.body, -49, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 49, 0);
	rope5 = new Rope(bob5.body, roof.body, 99, 0);
	Engine.run(engine);
  
}
function keyPressed()
 {
	if (keyCode === UP_ARROW)
	 {
		var options = 
		{
			x:-50,
			y:-45
		}
		 Matter.Body.applyForce(bob1.body,bob1.body.position,options);
								
	
	}
}

function draw() 
{
  rectMode(CENTER);
  background("White");
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //drawSprites();
 
}



