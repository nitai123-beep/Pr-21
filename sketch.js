var bullet,wall;
var speed,weight,thickness,width;
var count;
var gameState = "play";

function setup() {
  createCanvas(1600,400);
bullet = createSprite(50,200,50,10);
width=thickness;
count=0;


}

function draw() {
  background("black");
  bullet.shapeColor=("white");  

  textSize(28);
  fill ("white");
  text("Damage:"+count,650,50);
 if (gameState==="play"){
  wall = createSprite(1200,200,width,200);
  wall.shapeColor=80,80,80;
  thickness=random(22,83)
    speed = random(223,321);
  weight = random(30,52);
  
  bullet.velocityX=speed;
  
  text("Press Space Test",800,250 )
 if (bullet.x>wall.x){

  gameState="end";
  }
  
  
 
  
  }
if (gameState==="end"){
 
  text("Press Space To Retest",800,250 )
count=0.5*weight*speed*speed/(thickness*thickness*thickness);

bullet.velocityX=0;
if(count>10){

text("Not This Wall!",800,200);
wall.shapeColor=("red");

}
  if(count<10){

    text("This wall is for you!",800,200);
    wall.shapeColor=("green");
    }

    if (keyDown("space")){
  
      reset();  
      

}
}

 
  
  drawSprites();


}

function reset(){
  bullet.x=50;
  bullet.y=200;
gameState="play";
count=0;



}


