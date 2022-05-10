var Ghost;

var ghostR = [];
var ghostRData, ghostRSheet;

function preload(){
  
ghostRData = loadJSON("assets/Ghostright.json");
   ghostRSheet = loadImage("assets/Ghostright.png");
  //zap = loadImage("assets/shooter_2.png")
  //shooter_shooting = loadImage("assets/shooter_3.png")

  //zombieImg = loadImage("assets/zombie.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
   

  //creating the player sprite
 
    Ghost = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
    Ghost.addImage("assets/Ghostright.png");
    Ghost.scale = 1;
   // flametal.debug = true;
    Ghost.setCollider("rectangle",0,0,300,300);

   
   //creating sprites to depict lives remaining
   var ghostRFrames = ghostRData.frames;
   for (var i = 0; i < ghostRFrames.length; i++) {
     var pos = ghostRFrames[i].position;
     var img = ghostRSheet.get(pos.x, pos.y, pos.w, pos.h);
     ghostR.push(img);
   }
   

    //creating group for zombies    
    goldGoblins = new Group();
};

function draw() {
  background(0); 

  //moving the player up and down and making the game mobile compatible using touches
  
  if(keyDown("w")){
    Ghost.y = Ghost.y-30;
  }
  if(keyDown("a")){
    Ghost.x = Ghost.x-30;
  }
  if(keyDown("d")){
    Ghost.x = Ghost.x+30;
  }
  
  drawSprites();


}
function enemy(){
  if(frameCount%50===0){

    //giving random x and y positions for zombie to appear
    zombie = createSprite(500,500,40,40)

    zombie.addImage(zombieImg)
    zombie.scale = 0.15
    zombie.velocityX = -3
    zombie.debug= true
    zombie.setCollider("rectangle",0,0,400,400)

    zombie.lifetime = 400
    zombieGroup.add(zombie)
  }
}
