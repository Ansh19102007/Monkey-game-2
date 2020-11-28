var monkey,monkeyImage

var banana,bananaImage

var stone,stoneImage

var jungle,jungleImage

var invisibleGround

var bananaGroup

var obstacleGroup

var score

function preload(){
  monkeyImage = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png")
  
  obstacleImage = loadImage("stone.png")
  
  jungleImage = loadImage("jungle.jpg")
  
}

function setup() {
  createCanvas(400, 400);
  jungle = createSprite(200,100,0,0)
  jungle.addImage("jungle",jungleImage)
  jungle.x = jungle.width/2
  jungle.velocityX = -6
  
  monkey = createSprite(100,330,0,0);
  monkey.addAnimation("monkey",monkeyImage)
  monkey.scale = 0.22
  
  invisibleGround = createSprite(200,360,400,10)
  invisibleGround.visible = false
  
  bananaGroup = createGroup()
  
  obstacleGroup = createGroup()
  
  score = 0
  
}

function draw() {
  background("white");
  if(jungle.x<100){
     jungle.x = jungle.width/2
     }
  
  if(keyDown("space") && monkey.y>=260){
     monkey.velocityY = -11
     
     
     }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleGround)
  
  if(obstacleGroup.isTouching(monkey)){
     monkey.scale = 0.2
     }
  
  if(bananaGroup.isTouching(monkey)){
     banana.destroy()
     score = score+2
     }
  
  switch(score){
    case 10: monkey.scale = 0.12;
            break;
    case 20: monkey.scale = 0.14;
            break;
    case 30: monkey.scale = 0.16;
            break;
    case 40: monkey.scale = 0.18   
  }
  
  spawnBanana()
  spawnObstacle()
  
  drawSprites()
  
  stroke("white")
  textSize(20)
  fill("white")
  score = Math.ceil(frameCount/frameRate())
  text("Score :" + score,500,50)
  
}

function spawnBanana(){
  if(frameCount%120 === 0){
     banana = createSprite(400,random(120,200),0,0)
     banana.addImage("banana",bananaImage)
     banana.scale = 0.07
     banana.velocityX = -4
     banana.lifetime = 140
     bananaGroup.add(banana)
  }   
}

function spawnObstacle(){
  if(frameCount%80 === 0){
     stone = createSprite(400,320,0,0)
     stone.addImage("stone",obstacleImage)
     stone.scale = 0.15
     stone.velocityX = -4
     stone.lifetime = 125
     obstacleGroup.add(stone)
    
     }
  
  
  
  
  
  
  
  
  
}

