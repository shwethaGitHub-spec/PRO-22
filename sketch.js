const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var thread1,thread2,thread3,thread4,thread5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	var roof_options={
		isStatic:true			
	}
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	//bobs
    var bob1_options  = {
		restitution :1,
		friction:0,
		isStatic:false,
		density:0.8
	}
	bob1 = Bodies.circle(320,380,20,bob1_options);
	World.add(world,bob1);
    bob2 = Bodies.circle(360,380,20,bob1_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,380,20,bob1_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(440,380,20,bob1_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(480,380,20,bob1_options);
	World.add(world,bob5);
	console.log (bob1_options);
	thread1 = new Rope(bob1,roof,-80,0);
	thread2 = new Rope(bob2,roof,-40,0);
	thread3 = new Rope(bob3,roof,0,0)
	thread4 = new Rope(bob4,roof,40,0);
	thread5 = new Rope(bob5,roof,80,0);

    console.log(thread1)
	Engine.run(engine);
	fill("yellow");
	ellipseMode(CENTER);
	rectMode(CENTER)
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

 rect(roof.position.x,roof.position.y,230,20);
 
 thread1.display()
 thread2.display();
 thread3.display();
 thread4.display();
 thread5.display();
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,40,40);
  ellipse(bob2.position.x,bob2.position.y,40,40);
  ellipse(bob3.position.x,bob3.position.y,40,40);
  ellipse(bob4.position.x,bob4.position.y,40,40);
  ellipse(bob5.position.x,bob5.position.y,40,40);

//roof.display();
text("press up arrow 2 times",10,100);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45}); 
		}
		
	 }

//
