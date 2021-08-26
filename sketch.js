var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);

  //rabbit moving on Xaxis with mouse
  rabbit.x = World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if(frameCount % 80 == 0){
  if(select_sprites == 1){
    createApples();
   }
   else{
     createLeaves();
   }
   
}
}
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.04;
  apple.velocityY = 3
  apple.lifetime = 80;

}

function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale = 0.05;
  leaves.velocityY = 3
  leaves.lifetime = 80;
}
