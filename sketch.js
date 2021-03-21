var pc1;
var door;
var door2;
var floor;
var ceeling;
var wall1;
var wall2;
var life = 30;
var edges;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var p1;
var bow;
var arrow;
var code;
var needleImg;
var button;


function preload(){
  needleImg = loadImage("sword.png");
}

function setup(){
  createCanvas(1200,800);

  engine = Engine.create();
	world = engine.world;

  p1 = new Player(40,350,20,40);
  bow = new Bow(358,300,40,20, PI/20);
  arrow = new Arrow(358,300,40,20, PI/12);
  code = new Code()


  pc1 = createSprite(40,760,20,40);
  door = createSprite(8,730,20,120);
  door.shapeColor = "red";
  door2 = createSprite(1190,730,20,120);
  door2.shapeColor = "yellow";
  floor = createSprite(150,790,2200,20);
  floor.shapeColor = "purple";
  ceeling = createSprite(150,3,2200,20);
  wall1 = createSprite(8,30,20,1290);
  wall1.shapeColor = "green"
  wall2 = createSprite(1190,30,20,1290);
  wall2.shapeColor = "green"
  //button = createSprite(1175,740,10,10)

  edges = createEdgeSprites()

  pc1.bounceOff(edges[0]);
  pc1.bounceOff(edges[1]);
  pc1.bounceOff(edges[2]);
  pc1.bounceOff(edges[3]);

  needleGroup = new Group();

}

function draw() {
  background("blue");
  Engine.update(engine);
  text(20);
  stroke("red");
  text("your health = " + life, 50,36);
  
  
  if(needleGroup.isTouching(pc1)){
    life -= 1;
  }
  
  if(life === 10){
    text(20);
    stroke("red")
    text("you lost 1 life. you have " + life + "left" ,100,108);
  }

  if(pc1.isTouching(edges[2])){
    pc1.velocityX = 0;
    pc1.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    pc1.velocityX = 5;
    pc1.velocityY = 0;
  } 
  
  if(keyDown("LEFT_ARROW")){
    pc1.velocityX = -5;
    pc1.velocityY = 0;
  } 
  
  if(keyDown("UP_ARROW")){
    pc1.velocityX = 0;
    pc1.velocityY = -5;
  } 
  
  if(keyDown("DOWN_ARROW")){
    pc1.velocityX = 0;
    pc1.velocityY = 5;
  } 

  if(mousePressedOver(button)){
    code.display()
  }
  
  needles();
  drawSprites();

  p1.display();
  bow.display();
  arrow.display();
  code.display();
}

function needles(){
  if(frameCount%20 === 0){
  var needles = createSprite(1170,-10,2,20);
  needles.x = Math.round(random(8,1170));
  needles.velocityY = 5;
  needleGroup.add(needles);
  needles.addImage(needleImg);
  needles.scale = 0.03;
  }
  
}
