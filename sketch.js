const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var batAnimation, bat;

var man,umbrella,lightening;

var lighteningimg1,lighteningimg2,lighteningimg3,lighteningimg4,manimg,batmanimg;

var maxDrops = 100;

var drops = [];
var rain = [];

var engine,world;

var rand;

var thunderCreatedFrame=0;

function preload(){
  lighteningimg1 = loadImage("1.png");
  lighteningimg2 = loadImage("2.png"); 
  lighteningimg3 = loadImage("3.png"); 
  lighteningimg4 = loadImage("4.png"); 
  
  //manimg = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png","walking_2.png","walking_1.png",) 
  
  batAnimation = loadAnimation("bat1.png","bat2.png","bat3.png","bat4.png","bat5.png","bat6.png","bat7.png","bat8.png","bat9.png","bat10.png","bat11.png","bat12.png");

  //batmanimg = loadImage("batman.png");
}

function setup(){
  createCanvas(400,700); 
  engine = Engine.create();
  world = engine.world;
  
  umbrella = new Umbrella(200,500);

     
   /*man = createSprite(210,550,50,50);
   man.addAnimation("walking",manimg);
   man.scale = 0.4;*/

   //lightening = createSprite(210,143,50,50);
   //lightening.addAnimation("lightening",lighteningimg);
   //lightening.scale = 0.4;

   if(frameCount % 200 === 0){
    for(i=0;i < maxDrops;i++){
      drops.push(new Drops(random(0,400),random(0,400)))
    }	
}
  
}

function draw(){
  background(0);
  Engine.update(engine);
  
  var dp = Math.round(random(1,4));
  if(frameCount % 30 === 0){
    lightening = createSprite(random(100,400),134,50,50);
    switch (dp) {
      case 1:lightening.addImage(lighteningimg1);
        
        break;
      case 2:lightening.addImage(lighteningimg2);

        break;
      case 3:lightening.addImage(lighteningimg3);
      
        break;
      case 4:lightening.addImage(lighteningimg4);
      
        break;
      default:
        break;
    }
    lightening.scale = 0.4;
    lightening.lifetime = 20;
  }
  
  bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }

    umbrella.display();

    for(i = 0; i < maxDrops; i++){
        drops[i].display();
        drops[i].update();
    }


  drawSprites();
}   

