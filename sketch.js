const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;




var engine,world;
var ball;
var ground;

//make physics bodies here
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var g_options={
     isStatic : true 
     };
  ground=Bodies.rectangle(400,380,800,40,g_options);
  World.add(world,ground);

  var ball_options={
    restitution : 1 
    };

 ball=Bodies.circle(400,30,50,ball_options);
  World.add(world,ball);
 // console.log(object);
  //console.log(object.isStatic);
//  console.log(object.position.x);
 // console.log(object.position.y);
}


//show them by drawing
function draw() {
  
  background(0,0,0);  
  Engine.update(engine);
 // ground.isStatic=true
rectMode(CENTER);
fill("green");
rect(ground.position.x,ground.position.y,800,40);
ellipseMode(RADIUS)
fill("yellow")
ellipse(ball.position.x,ball.position.y,50,50)
}