var ship, ship_;
var sea, sea_;

function preload(){
  ship_ = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
  sea_ = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(1041, 200);
  sea.addImage("sea", sea_);
  sea.scale=0.5;
  sea.velocityX=-5
  ship=createSprite(150,240);
  ship.addAnimation("ship", ship_);
  ship.scale=0.2;
}

function draw() {
  background("black");
  if (sea.x<-0) {
    sea.x = 1041;
  }
  drawSprites();
}