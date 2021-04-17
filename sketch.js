var Rect1,Rect2;
function setup() {
  createCanvas(800,400);
 Rect1=createSprite(300,200,50,50);
 Rect1.shapeColor="Blue";
 Rect2=createSprite(500,200,50,50);
 Rect2.shapeColor="Green";
}

function draw() {
  background(255,255,255);

Rect2.x=World.mouseX;
Rect2.y=World.mouseY;
if(Rect2.x-Rect1.x<Rect2.width/2 + Rect1.width/2 && Rect1.x-Rect2.x<Rect1.width/2 + Rect2.width/2 && Rect2.y-Rect1.y<Rect2.height/2 + Rect1.height/2 && Rect1.y-Rect2.y<Rect1.height/2+Rect2.height/2){
Rect1.shapeColor="Red";
Rect2.shapeColor="Red";  
}
else{
  Rect1.shapeColor="Blue";
  Rect2.shapeColor="Green";

}
drawSprites();
}