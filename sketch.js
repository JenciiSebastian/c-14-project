var bow, scene, arrow;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;


function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
createCanvas(400, 400);

//creating background
scene = createSprite(0,0,400,400);
scene.addImage(backgroundImage);
scene.scale = 2.5;

// creating bow to shoot arrow
bow = createSprite(380,220,20,50);
bow.addImage(bowImage); 
bow.scale = 1;

     
}

function draw() {
 background(0);

 bow.y = World.mouseY;

// release arrow when space key is pressed
if (keyDown("space")) {
  arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.y = bow.y;
  arrow.x = 340;
  arrow.lifetime = 80;
  arrow.velocityX = -4;
  arrow.scale = 0.3;
}

var rand = Math.round(random(1,4));
console.log(rand);

switch (rand) {
  case 1 : redBalloon();
           break;
  case 2 : blueBalloon();
           break;
  case 3 : greenBalloon(); 
           break;
  case 4 : pinkBalloon();
           break;
  default:
    break;
}

  drawSprites();
}


function pinkBalloon() {
  if (frameCount % 100 == 0) {
    var pink = createSprite(0, Math.round(random(20,370)) , 10, 10);
    pink.addImage(pink_balloonImage);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1.5; 
  }
}

function blueBalloon() {
  if (frameCount % 70 == 0 ){
    var blue = createSprite(0, Math.round(random(20,370)) , 10, 10);
    blue.addImage(blue_balloonImage);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.12 ;
  }
}

function redBalloon() {
  if (frameCount % 70 == 0){
    var red = createSprite(0, Math.round(random(20,370)) , 10, 10);
    red.addImage(red_balloonImage);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale =0.1 ; 
  }
}

function greenBalloon() {
  if (frameCount % 130 == 0) {
    var green = createSprite(0, Math.round(random(20,370)) , 10, 10);
    green.addImage(green_balloonImage);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1 ;
  }
}
