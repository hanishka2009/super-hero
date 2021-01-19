class Monster{
    constructor(x,y,r){
  var options={
  
  frictionAir:0.1,
  isStatic:false, 
  density:0.2
  }
  this.r=r
  this.body=Bodies.circle(x,y,(this.r)/2,options)
  this.image =loadImage("monster-01.png");
  
  //this.colour=color(ramdom(0,255),ramdom(0,255),ramdom(0,255))
  World.add(world,this.body) 
  }
  display(){
  var paperpos=this.body.position;
  push()
  translate(paperpos.x,paperpos.y)
  imageMode(CENTER);
  image(this.image, 0, 0, this.r,this.r);
  
  fill(255,0,255)
  
  pop()   
  }//
  }