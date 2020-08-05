const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper1, slingShot;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	/*red1sprite = createSprite(width/2, 655, 310, 10);
	red1sprite.shapeColor=("red")
	
	red2sprite = createSprite(250, 600, 10, 100);
	red2sprite.shapeColor=("red")
	
	red3sprite = createSprite(550, 600, 10, 100);
    red3sprite.shapeColor=("red")

	red1 = Bodies.rectangle(width/2, 655, 310, 10,{isStatic:true, density: 1});
	World.add(world, red1);
	
	red2 = Bodies.rectangle(250, 600, 10, 100, {isStatic:true});
    World.add(world, red2);

	red3 = Bodies.rectangle(550, 600, 10, 100, {isStatic:true});
	World.add(world, red3);*/


	groundSprite = createSprite(width/2, 660, width, 10);
	groundSprite.shapeColor=("brown");

	ground = Bodies.rectangle(width/2, 660, width, 10, {isStatic: true})
	World.add(world, ground);

	paper1 = new Crumpled();

	dustbin1 = new Dustbin(435, 560, 10, 198);
	dustbin2 = new Dustbin(555, 560, 10, 198)

	slingShot = new SlingShot(paper1.body, {x:200, y:100})
                                                                                                        
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER); 
  background("#FFFFFF");

  paper1.display();
  dustbin2.display();
  dustbin1.display();
  slingShot.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.body.setPosition(paper1.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	slingShot.fly()
}

