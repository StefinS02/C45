var Jet, JetImg;
var backgroundImg;
var asteroid1, asteroidImg;
function preload(){
  JetImg = loadImage("Fight Jet .png");
  backgroundImg = loadImage("space backg.jpg");
  asteroidImg = loadImage("asteroid1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  Jet = createSprite(550, 750);
  Jet.addImage(JetImg);
  Jet.scale = 0.9;

  asteroid1 = createSprite(480, 400);
  asteroid1.addImage(asteroidImg);
  asteroid1.scale = 0.3;

}

function draw() { 
  background(189);
  image(backgroundImg, 0, 0, width, height);
  spawnAsteroids();
  drawSprites();
}

function spawnAsteroids(){
  if(frameCount % 80 == 0){
    asteroid1 = createSprite(480, 0);
  asteroid1.addImage(asteroidImg);
  asteroid1.scale = 0.3;
  asteroid1.velocityY = 2;
  }
  
}