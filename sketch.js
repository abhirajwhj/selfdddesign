var backGround,bg,player1,player2,playerI1,playerI2,shuttle,shuttleI,playerScore=0;
var compScore=0;
function preload(){
  backGround=loadImage("court.png")
  playerI1=loadImage("Racket1.png");
  playerI2=loadImage("Racket2.png");
  shuttleI=loadImage("shuttle.png");
}
function setup() {
  createCanvas(1200,800);
  bg=createSprite(600,400,1200,800);
  bg.addImage("bg",backGround);
  bg.scale=5;
  player1=createSprite(200, 400, 50, 50);
  player1.addImage("player1",playerI1);
  player1.scale=0.4;
  player2=createSprite(1000, 400, 50, 50);
  player2.addImage("player2",playerI2);
  player2.scale=0.2;
  shuttle=createSprite(1000, 400, 50, 50);
  shuttle.addImage("shuttle",shuttleI);
  shuttle.scale=0.1;
  edges= createEdgeSprites();
}

function draw() {
 // background(); 
  
  player2.y=mouseY; 
  player1.y=shuttle.y;
  if(keyDown("space")){
        shuttle.velocityX=-10;
        shuttle.velocityY=10;
  }
  if(shuttle.y<0||shuttle.y>800){
        shuttle.x=1000;
        shuttle.y=400;
        shuttle.velocityX=0;
        shuttle.velocityY=0;
  }
  if(shuttle.x<0||shuttle.x>1200){
        if(shuttle.x<0){
               playerScore=playerScore+1;
        }
        if(shuttle.x>1200){
          compScore=compScore+1;
   }
  }
  //shuttle.bounce(edges[0]);
 // shuttle.bounce(edges[3]);
  shuttle.bounceOff(player1);
  shuttle.bounceOff(player2);
  
  text("PlayerScore:"+playerScore,1000,300);
  
 
  
  drawSprites();
}