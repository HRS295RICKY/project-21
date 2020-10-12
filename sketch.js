var wall,thickness;
var bullet,speed,weight;
thickness = random(23,83)

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite (1200, 200, thickness, height/2);
  wall.shapeColor=color("blue");
  bullet = createSprite (50,200,150,50);
  bullet.velocityX= speed;
  
}

function draw() {
  background("black");  
  if (hasCollided(bullet,wall))
{
 bullet.velocityX = 0;
 var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 

 if (damage>10)
 {
  bullet.shapeColor  = color("green");
 }

  if(damage<10)
  {
  bullet.shapeColor = color("red");
  }

}
  
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
     bulletRightEdge=lbullet.x + lbullet.width;
     wallLeftEdge = lwall.x;
     if(bulletRightEdge>=wallLeftEdge)
     {
          return true;
     }

    return false;
}