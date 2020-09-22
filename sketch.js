const Engine=Matter.Engine;
 const World=Matter.World; 
  const Bodies=Matter.Bodies;
  var engine,world; 
  var object; 
  var ground;
  var ball; 
   
 
  function setup() 
  {
   var ground_options={isStatic:true};
   createCanvas(400,400);
   var ball_options={restitution: 1.0}; 
   engine=Engine.create();
   world=engine.world; 
   //object=Bodies.rectangle(200,100,50,50,object_options);
   ground = Bodies.rectangle(200,390,200,20,ground_options);
   World.add(world,ground);
   ball = Bodies.circle(200,100,20,ball_options);
   
   World.add(world,ball);

  } 
function draw() 
{ 
  background(0);
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites(); 
}


