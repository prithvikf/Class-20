var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect  = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect = createSprite(200,300,30,80);
  fixedRect.shapeColor="blue";
}

function draw() {
  background("black");
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2  &&
    fixedRect.x -movingRect.x <  movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y -movingRect.y <  movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }
  drawSprites();
}