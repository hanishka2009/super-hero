const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mon
var engine,world,Background,hero,ground,rope,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14
function preload() {
//preload the images here
Background=loadImage("background.png")
}

function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(1500, 700);
  // create sprites here
  hero=new Hero(200,250,500)
ground=new Ground(480,600,1200,20)
rope=new Fly(hero.body,{x:250,y:300})
b1=new Box(690,598,60,60)
b2=new Box(690,548,60,60)
b3=new Box(690,498,60,60)
b4=new Box(690,448,60,60)
b5=new Box(690,398,60,60)

b6= new Box(800,598,60,60)
b7= new Box(800,548,60,60)
b8= new Box(800,498,60,60)
b9= new Box(800,448,60,60)
b10= new Box(800,398,60,60)
b11= new Box(800,348,60,60)
mon = new Monster(1050,440,300)
  Engine.run(engine);
}

function draw() {
  background(Background);
  rope.display()
hero.display();
ground.display();
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
mon.display();
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})  
}
