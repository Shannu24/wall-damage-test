
var rect1,rect2;
var speed,weight,thickness; 


function setup() {
  createCanvas(700,400);
  rect1=createSprite(650, 200, thickness, 400);
  rect1.shapeColor=("blue");

  rect2=createSprite(50,200,25,8);

  speed = random(223,321);
  weight= random(30,52);
  thickness=random(22,83);
 
}

function draw() {
  background("black"); 
  rect2.velocityX=speed;
  
if(rect2.x-rect1.x<rect1.width/2+rect2.width/2  &&  rect1.x-rect2.x<rect1.width/2+rect2.width/2
    && rect2.y-rect1.y<rect1.height/2+rect2.height/2  &&  rect1.y-rect2.y<rect1.height/2+rect2.height/2){
    
  rect2.velocityX=0;
  rect2.x=600
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
 if(damage>10){
   rect1.shapeColor=("red");
 }
 if(damage<10){
  rect1.shapeColor=("green");
 }
}

  drawSprites()
}