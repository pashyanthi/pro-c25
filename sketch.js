
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cPaper,binpart1,binpart2,binpart3,ground;
function preload()
{
 	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	binpart1=new Dustbin(690,300,200,20);
	
	binpart2=new Dustbin(500,590,20,100)
	binpart3=new Dustbin(700,590,20,100);
	
	cPaper= new paper(80,600);
	ground=new Ground(150,660,2300,10)
	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
  background("white");
  binpart2.display();
  binpart3.display();
  ground.display();
  binpart1.display();
  cPaper.display();

  drawSprites();
}


function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(cPaper.body,cPaper.body.position,{x:167,y:-167});
	}

}



