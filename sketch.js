
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ball3;
var ball4;
var ground;
var block1;
var block2;
var angle=60;
var angle1=80;
var angle2=100;
var poly;
var wedge;
var wedge1;
var wedge2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var wedge_options = {
    isStatic:true
  }

  wedge = Bodies.rectangle(200,100,100,20,ground_options)
  wedge1 = Bodies.rectangle(200,101,100,20,wedge_options)
  wedge2 = Bodies.rectangle(200,100,100,20,wedge_options)
  
   var ball_options = {
    restitution: 0.4,
    frictionAir:0.02,
  }
   
  var ground_options ={
    isStatic: true
  };
 
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  block1 = Bodies.rectangle(50,200,150,20,ground_options);
  World.add(world,block1);

  block2 = Bodies.rectangle(350,200,150,20,ground_options);
  World.add(world,block2);

  ball = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball)
  
  ball2 = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball2)

  ball3 = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball3)

  ball4 = Bodies.circle(220,10,10,ball_options);
  World.add(world,ball4)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background("darkgray  ");
  Engine.update(engine);
Matter.Body.rotate(wedge,angle)
Matter.Body.rotate(wedge1,angle)
Matter.Body.rotate(wedge2,angle)
push();
translate(wedge.position.x,wedge.position.y);
rotate(angle);
fill ("white")
rect(0,0,100,20)
pop();
angle+=0.1
fill ("gray");
  rect(ground.position.x,ground.position.y,400,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  ellipse(ball.position.x,ball.position.y,10,10);
  ellipse(ball2.position.x,ball2.position.y,10,10); 
  ellipse(ball3.position.x,ball3.position.y,10,10); 
  ellipse(ball4.position.x,ball4.position.y,10,10);

  push();
  translate(wedge1.position.x,wedge1.position.y);
  rotate(angle1);
  fill ("gray")
  rect(0,0,101,20)
  pop();
  angle1+=0.1
 
  push();
  translate(wedge2.position.x,wedge2.position.y);
  rotate(angle2);
  fill ("black")
  rect(0,0,101,20)
  pop();
  angle2+=0.1
 

  
  
}

