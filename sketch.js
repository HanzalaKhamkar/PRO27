var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(200,600,20,20);
	bobObject2 = new bob(220,600,20,20);
	bobObject3 = new bob(240,600,20,20);
	bobObject4 = new bob(260,600,20,20);
	bobObject5 = new bob(280,600,20,20);

	roof = new Roof(240,400,130,20);

	rope1 = new Rope(bobObject1.body, roof.body, -bob*2,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("pink");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}