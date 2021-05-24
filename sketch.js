var Wallpaper,Wallpaperimage,TOMimage,TOM,JERRY,JERRY_image,jerryimage2,jerryimage3,
tomimage2,tomimage3,jerryimage4,tomimage4;


function preload() {
  Wallpaperimage = loadImage ("images/garden.png");
   TOMimage = loadImage("images/cat1.png")
   JERRY_image = loadImage("images/mouse1.png")
   jerryimage2 = loadImage("images/mouse2.png")
   jerryimage3 = loadImage("images/mouse3.png")
   jerryimage4 = loadImage("images/mouse4.png")
   tomimage2 = loadImage("images/cat2.png")
   tomimage3 = loadImage("images/cat3.png")
   tomimage4 = loadImage("images/cat4.png")

   
   
   
}

function setup(){
    createCanvas(800,800);
   
    Wallpaper = createSprite (400,200,50,20)
    Wallpaper.addImage("background",Wallpaperimage)
   
    TOM = createSprite (640,400,30,20)
    TOM.addImage("TOM",TOMimage)
    TOM.scale = 0.2;

    JERRY = createSprite (100,400,30,20)
    JERRY.addImage("jerry",JERRY_image)
    JERRY.scale = 0.1;

    
}

function draw() {
    background("0");

    TOM.velocityX=0;
    TOM.velocityY = 0;

    keyPressed ();
    
    //Write condition here to evalute if tom and jerry collide
    if(TOM.x - JERRY.x < (TOM.width - JERRY.width)/2){

      TOM.addAnimation("tommovement3" , tomimage4)
    TOM.changeAnimation ("tommovement3")

    JERRY.addAnimation("mouseTeasing3" , jerryimage4)
    JERRY.changeAnimation ("mouseTeasing3")
    }
    
    
   
    drawSprites();
   
}


function keyPressed(){

  //For moving and changing animation write code here
  if(mouseWentDown("left")){
    TOM.velocityX = -10;

    TOM.addAnimation("tommovement" , tomimage2)
    TOM.changeAnimation ("tommovement")
   

    JERRY.addAnimation("mouseTeasing" , jerryimage2)
    JERRY.changeAnimation ("mouseTeasing")
  
  }
 if(mouseWentUp("left")){
  TOM.velocityX = -10;

  TOM.addAnimation("tommovement1" , tomimage3)
    TOM.changeAnimation ("tommovement1")
   

    JERRY.addAnimation("mouseTeasing1" , jerryimage3)
    JERRY.changeAnimation ("mouseTeasing1")

 }
   
  

}