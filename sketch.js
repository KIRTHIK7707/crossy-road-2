var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
   }

function draw() {
  background("skyblue");

  for (var i=0;i<6;i++){
    var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
    if(i%2===0)
    {
   var road= createSprite(683,height-150-(i*400)-grassHeight,width,300,)  
    road.shapecolor="black";(0)
    }
    bottomGrass1.shapecolor="grey";
  }
  
  for(var i = 0; i < 40; i++){
    cars = new car(2);
    carGroup1.add(cars.spt);
  }
  
  
  for(i=1;i<logGroup1.length;1++){
    if(logGroup1[i].x<0)
    {
    logGroup1[i].x=width;  
    }
  } 
 
drawSprites();
 

function keyPressed(){
  if(keycode ==  UP_ARROW){
    player.move(0,-2);
  }else if(keycode == DOWN_ARROW){
   player.move(0,2);
}else if(keycode == LEFT-ARROW){
  player.move(-2,0);
}else if(keycode == RIGHT-ARROW){
  player.move(2,0);
}
}

translate(0,-player.spt.y+height-150);

}

