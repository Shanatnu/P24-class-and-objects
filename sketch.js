
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,rubber,plane,stone;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7;
var iron;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	Engine.run(engine);
	hammer=new Hammer(400,400,150,30);
	plane=new Plane(400,550,750,10);
	rubber=new Rubber(700,470,30);
	stone=new Stone(200,490,100,100);

	sand1=new Sand(600,535,10);
	sand2=new Sand(570,535,10);
	sand3=new Sand(440,535,10);
	sand4=new Sand(540,535,10);
	sand5=new Sand(500,535,10);
	sand6=new Sand(350,535,10);
	sand7=new Sand(280,535,10);

	iron=new Iron(430,520,100,50);
	
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  
  hammer.display();
  plane.display();
  rubber.display();
  stone.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();

  iron.display();
  
  drawSprites();
 
}



