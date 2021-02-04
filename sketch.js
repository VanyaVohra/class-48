var pacman, pacmanImg;
var leftImg, upImg, downImg;
var redGhost, redGhostImg;
var BlueGhost, BlueGhostImg;
var GreenGhost, GreenGhostImg;
var YellowGhost, YellowGhostImg;
var pinkScared, pinkScaredImg;
var BlueScared, BlueScaredImg;
var cardboard1, cardboard2, cardboard3, cardboard4, cardboard5, cardboard6, cardboard7, cardboard8, cardboard9, cardboard10, cardboard11;
var cardboard12, cardboard13, cardboard14, cardboard15, cardboard16, cardboard17, cardboard18, cardboard19, cardboard20, cardboard21, cardboard22;
var cardboard23, cardboard24, cardboard25, cardboard26, cardboard27, cardboard28, cardboard29, cardboard30, cardboard31, cardboard32, cardboard33;
var cardboard34, cardboard35, cardboard36, cardboard38, cardboard39, cardboard40, cardboard41, cardboard42, cardboard43, cardboard44;
var edges;
var coin, coinImg;
var score;
var lives, life, lifeImg;

function preload() {
  pacmanImg = loadAnimation("pacman_full.png", "pacman_half.png", "pacman_open.png", "pacman_half.png")
  leftImg = loadAnimation("pacman_full.png", "pacman left half.png", "pacman left open.png", "pacman left half.png")
  downImg = loadAnimation("pacman_full.png", "pacman down half.png", "pacman down open.png", "pacman down half.png")
  upImg = loadAnimation("pacman_full.png", "pacman up half.png", "pacman up open.png", "pacman up half.png")
  redGhostImg = loadImage("red_ghost.png");
  BlueGhostImg = loadImage("blue_ghost.png");
  GreenGhostImg = loadImage("green_ghost.png");
  YellowGhostImg = loadImage("yellow_ghost.png");
  coinImg = loadImage("pacman_coin.png");
  lifeImg = loadImage("heart_image.png");
}

function setup() {
  createCanvas(400,420);

  edges = createEdgeSprites();

  //adding images and creating main characters
  pacman = createSprite(10,10, 0, 0);
  pacman.addAnimation("pacmanImg", pacmanImg);
  pacman.addAnimation("upImg", upImg);
  pacman.addAnimation("downImg", downImg);
  pacman.addAnimation("leftImg", leftImg);
  pacman.scale = 0.2
  redGhost = createSprite(115,13,0,0);
  redGhost.addImage(redGhostImg);
  redGhost.scale = 0.05;
 redGhost.velocityX = 2;
 redGhost.debug=true;
  BlueGhost = createSprite(50,200,0,0);
  BlueGhost.addImage(BlueGhostImg);
  BlueGhost.scale = 0.05;
  BlueGhost.velocityY = -2;
  GreenGhost = createSprite(130,200,0,0);
  GreenGhost.addImage(GreenGhostImg);
  GreenGhost.scale = 0.05;
  GreenGhost.velocityY = 2;
  YellowGhost = createSprite(310,200,0,0);
  YellowGhost.addImage(YellowGhostImg);
  YellowGhost.scale = 0.05;
  YellowGhost.velocityY = -2;

  score = 0;

  lives = 3;

  life1 = createSprite(15, 410, 0, 0)
  life1.addImage(lifeImg);
  life1.scale = 0.03;
  life2 = createSprite(35, 410, 0, 0)
  life2.addImage(lifeImg);
  life2.scale = 0.03;
  life3 = createSprite(55, 410, 0, 0)
  life3.addImage(lifeImg);
  life3.scale = 0.03;

  coin = createSprite(25,10, 0, 0);
  coin.addImage(coinImg);
  coin.scale = 0.05;

  coin2 = createSprite(50,10, 0, 0);
  coin2.addImage(coinImg);
  coin2.scale = 0.05;

  coin3 = createSprite(75,10, 0, 0);
  coin3.addImage(coinImg);
  coin3.scale = 0.05;

  coin4 = createSprite(100,10, 0, 0);
  coin4.addImage(coinImg);
  coin4.scale = 0.05;

  coin101 = createSprite(125,10,0,0);
  coin101.addImage(coinImg);
  coin101.scale = 0.05;

  coin5 = createSprite(150,10, 0, 0);
  coin5.addImage(coinImg);
  coin5.scale = 0.05;

  coin6 = createSprite(175,10, 0, 0);
  coin6.addImage(coinImg);
  coin6.scale = 0.05;

  coin7 = createSprite(200,10, 0, 0);
  coin7.addImage(coinImg);
  coin7.scale = 0.05;

  coin8 = createSprite(225,10, 0, 0);
  coin8.addImage(coinImg);
  coin8.scale = 0.05;

  coin9 = createSprite(250,10, 0, 0);
  coin9.addImage(coinImg);
  coin9.scale = 0.05;

  coin10 = createSprite(275,10, 0, 0);
  coin10.addImage(coinImg);
  coin10.scale = 0.05;

  coin11 = createSprite(300,10, 0, 0);
  coin11.addImage(coinImg);
  coin11.scale = 0.05;

  coin12 = createSprite(325,10, 0, 0);
  coin12.addImage(coinImg);
  coin12.scale = 0.05;

  coin13 = createSprite(350,10, 0, 0);
  coin13.addImage(coinImg);
  coin13.scale = 0.05;

  coin14 = createSprite(375,10, 0, 0);
  coin14.addImage(coinImg);
  coin14.scale = 0.05;

  coin15 = createSprite(10,35, 0, 0);
  coin15.addImage(coinImg);
  coin15.scale = 0.05;

  coin104 = createSprite(10,53, 0, 0);
  coin104.addImage(coinImg);
  coin104.scale = 0.05;

  coin16 = createSprite(120,385, 0, 0);
  coin16.addImage(coinImg);
  coin16.scale = 0.05;

  coin17 = createSprite(220,385, 0, 0);
  coin17.addImage(coinImg);
  coin17.scale = 0.05;

  coin18 = createSprite(375,385, 0, 0);
  coin18.addImage(coinImg);
  coin18.scale = 0.05;

  coin19 = createSprite(25,53, 0, 0);
  coin19.addImage(coinImg);
  coin19.scale = 0.05;

  coin20 = createSprite(50,53, 0, 0);
  coin20.addImage(coinImg);
  coin20.scale = 0.05;

  coin21 = createSprite(75,53, 0, 0);
  coin21.addImage(coinImg);
  coin21.scale = 0.05;

  coin102 = createSprite(100,53, 0, 0);
  coin102.addImage(coinImg);
  coin102.scale = 0.05;

  coin22 = createSprite(125,53, 0, 0);
  coin22.addImage(coinImg);
  coin22.scale = 0.05;

  coin23 = createSprite(150,53, 0, 0);
  coin23.addImage(coinImg);
  coin23.scale = 0.05;

  coin24 = createSprite(175,53, 0, 0);
  coin24.addImage(coinImg);
  coin24.scale = 0.05;

  coin103 = createSprite(200,53, 0, 0);
  coin103.addImage(coinImg);
  coin103.scale = 0.05;

  coin25 = createSprite(225,53, 0, 0);
  coin25.addImage(coinImg);
  coin25.scale = 0.05;

  coin26 = createSprite(275,53, 0, 0);
  coin26.addImage(coinImg);
  coin26.scale = 0.05;

  coin27 = createSprite(300,53, 0, 0);
  coin27.addImage(coinImg);
  coin27.scale = 0.05;

  coin28 = createSprite(325,53, 0, 0);
  coin28.addImage(coinImg);
  coin28.scale = 0.05;

  coin29 = createSprite(350,53, 0, 0);
  coin29.addImage(coinImg);
  coin29.scale = 0.05;

  coin30 = createSprite(385,53, 0, 0);
  coin30.addImage(coinImg);
  coin30.scale = 0.05;

  coin31 = createSprite(250,53, 0, 0);
  coin31.addImage(coinImg);
  coin31.scale = 0.05;

  coin32 = createSprite(25,70, 0, 0);
  coin32.addImage(coinImg);
  coin32.scale = 0.05;

  coin33 = createSprite(10,70, 0, 0);
  coin33.addImage(coinImg);
  coin33.scale = 0.05;

  coin34 = createSprite(50,70, 0, 0);
  coin34.addImage(coinImg);
  coin34.scale = 0.05;

  coin35 = createSprite(385,70, 0, 0);
  coin35.addImage(coinImg);
  coin35.scale = 0.05;

  coin106 = createSprite(350,70, 0, 0);
  coin106.addImage(coinImg);
  coin106.scale = 0.05;

  coin36 = createSprite(10,90, 0, 0);
  coin36.addImage(coinImg);
  coin36.scale = 0.05;

  coin37 = createSprite(50,90, 0, 0);
  coin37.addImage(coinImg);
  coin37.scale = 0.05;

  coin38 = createSprite(200,90, 0, 0);
  coin38.addImage(coinImg);
  coin38.scale = 0.05;

  coin39 = createSprite(100,90, 0, 0);
  coin39.addImage(coinImg);
  coin39.scale = 0.05;

  coin40 = createSprite(125,90, 0, 0);
  coin40.addImage(coinImg);
  coin40.scale = 0.05;

  coin41 = createSprite(150,90, 0, 0);
  coin41.addImage(coinImg);
  coin41.scale = 0.05;

  coin42 = createSprite(175,90, 0, 0);
  coin42.addImage(coinImg);
  coin42.scale = 0.05;

  coin43 = createSprite(225,90, 0, 0);
  coin43.addImage(coinImg);
  coin43.scale = 0.05;

  coin44 = createSprite(250,90, 0, 0);
  coin44.addImage(coinImg);
  coin44.scale = 0.05;

  coin45 = createSprite(275,90, 0, 0);
  coin45.addImage(coinImg);
  coin45.scale = 0.05;

  coin46 = createSprite(300,90, 0, 0);
  coin46.addImage(coinImg);
  coin46.scale = 0.05;

  coin47 = createSprite(10,110, 0, 0);
  coin47.addImage(coinImg);
  coin47.scale = 0.05;

  coin48 = createSprite(350,90, 0, 0);
  coin48.addImage(coinImg);
  coin48.scale = 0.05;

  coin49 = createSprite(385,90, 0, 0);
  coin49.addImage(coinImg);
  coin49.scale = 0.05;

  coin50 = createSprite(50,110, 0, 0);
  coin50.addImage(coinImg);
  coin50.scale = 0.05;

  coin51 = createSprite(90,110, 0, 0);
  coin51.addImage(coinImg);
  coin51.scale = 0.05;

  coin52 = createSprite(125,110, 0, 0);
  coin52.addImage(coinImg);
  coin52.scale = 0.05;

  coin53 = createSprite(310,110, 0, 0);
  coin53.addImage(coinImg);
  coin53.scale = 0.05;

  coin107 = createSprite(350,110, 0, 0);
  coin107.addImage(coinImg);
  coin107.scale = 0.05;

  coin108 = createSprite(385,110, 0, 0);
  coin108.addImage(coinImg);
  coin108.scale = 0.05;

  coin109 = createSprite(385,30, 0, 0);
  coin109.addImage(coinImg);
  coin109.scale = 0.05;

  coin54 = createSprite(10,130, 0, 0);
  coin54.addImage(coinImg);
  coin54.scale = 0.05;

  coin55 = createSprite(50,130, 0, 0);
  coin55.addImage(coinImg);
  coin55.scale = 0.05;

  coin56 = createSprite(90,130, 0, 0);
  coin56.addImage(coinImg);
  coin56.scale = 0.05;

  coin57 = createSprite(125,130, 0, 0);
  coin57.addImage(coinImg);
  coin57.scale = 0.05;

  coin58 = createSprite(150,130, 0, 0);
  coin58.addImage(coinImg);
  coin58.scale = 0.05;

  coin59 = createSprite(175,130, 0, 0);
  coin59.addImage(coinImg);
  coin59.scale = 0.05;

  coin60 = createSprite(200,130, 0, 0);
  coin60.addImage(coinImg);
  coin60.scale = 0.05;

  coin61 = createSprite(220,130, 0, 0);
  coin61.addImage(coinImg);
  coin61.scale = 0.05;

  coin62 = createSprite(245,130, 0, 0);
  coin62.addImage(coinImg);
  coin62.scale = 0.05;

  coin63 = createSprite(270,130, 0, 0);
  coin63.addImage(coinImg);
  coin63.scale = 0.05;

  coin64 = createSprite(310,130, 0, 0);
  coin64.addImage(coinImg);
  coin64.scale = 0.05;

  coin65 = createSprite(350,125, 0, 0);
  coin65.addImage(coinImg);
  coin65.scale = 0.05;

  coin66 = createSprite(370,125, 0, 0);
  coin66.addImage(coinImg);
  coin66.scale = 0.05;

  coin67 = createSprite(385,130, 0, 0);
  coin67.addImage(coinImg);
  coin67.scale = 0.05;

  coin68 = createSprite(10,150, 0, 0);
  coin68.addImage(coinImg);
  coin68.scale = 0.05;

  coin110 = createSprite(50,150, 0, 0);
  coin110.addImage(coinImg);
  coin110.scale = 0.05;

  coin69 = createSprite(385,150, 0, 0);
  coin69.addImage(coinImg);
  coin69.scale = 0.05;

  coin70 = createSprite(90,150, 0, 0);
  coin70.addImage(coinImg);
  coin70.scale = 0.05;

  coin111 = createSprite(125,150, 0, 0);
  coin111.addImage(coinImg);
  coin111.scale = 0.05;

  coin112 = createSprite(270,150, 0, 0);
  coin112.addImage(coinImg);
  coin112.scale = 0.05;

  coin113 = createSprite(310,150, 0, 0);
  coin113.addImage(coinImg);
  coin113.scale = 0.05;

  coin71 = createSprite(350,140, 0, 0);
  coin71.addImage(coinImg);
  coin71.scale = 0.05;

  coin72 = createSprite(10,170, 0, 0);
  coin72.addImage(coinImg);
  coin72.scale = 0.05;

  coin73 = createSprite(50,170, 0, 0);
  coin73.addImage(coinImg);
  coin73.scale = 0.05;

  coin74 = createSprite(75,170, 0, 0);
  coin74.addImage(coinImg);
  coin74.scale = 0.05;

  coin75 = createSprite(90,170, 0, 0);
  coin75.addImage(coinImg);
  coin75.scale = 0.05;

  coin76 = createSprite(125,170, 0, 0);
  coin76.addImage(coinImg);
  coin76.scale = 0.05;

  coin77 = createSprite(150,170, 0, 0);
  coin77.addImage(coinImg);
  coin77.scale = 0.05;

  coin78 = createSprite(175,170, 0, 0);
  coin78.addImage(coinImg);
  coin78.scale = 0.05;

  coin79 = createSprite(200,170, 0, 0);
  coin79.addImage(coinImg);
  coin79.scale = 0.05;

  coin80 = createSprite(220,170, 0, 0);
  coin80.addImage(coinImg);
  coin80.scale = 0.05;

  coin81 = createSprite(260,170, 0, 0);
  coin81.addImage(coinImg);
  coin81.scale = 0.05;

  coin82 = createSprite(295,170, 0, 0);
  coin82.addImage(coinImg);
  coin82.scale = 0.05;

  coin83 = createSprite(315,170, 0, 0);
  coin83.addImage(coinImg);
  coin83.scale = 0.05;

  coin84 = createSprite(350,160, 0, 0);
  coin84.addImage(coinImg);
  coin84.scale = 0.05;

  coin85 = createSprite(370,160, 0, 0);
  coin85.addImage(coinImg);
  coin85.scale = 0.05;

  coin86 = createSprite(390,160, 0, 0);
  coin86.addImage(coinImg);
  coin86.scale = 0.05;

  coin87 = createSprite(350,175, 0, 0);
  coin87.addImage(coinImg);
  coin87.scale = 0.05;

  coin88 = createSprite(370,175, 0, 0);
  coin88.addImage(coinImg);
  coin88.scale = 0.05;

  coin89 = createSprite(65,190, 0, 0);
  coin89.addImage(coinImg);
  coin89.scale = 0.05;

  coin90 = createSprite(100,190, 0, 0);
  coin90.addImage(coinImg);
  coin90.scale = 0.05;

  coin91 = createSprite(260,190, 0, 0);
  coin91.addImage(coinImg);
  coin91.scale = 0.05;

  coin92 = createSprite(15,210, 0, 0);
  coin92.addImage(coinImg);
  coin92.scale = 0.05;

  coin93 = createSprite(40,210, 0, 0);
  coin93.addImage(coinImg);
  coin93.scale = 0.05;

  coin94 = createSprite(65,210, 0, 0);
  coin94.addImage(coinImg);
  coin94.scale = 0.05;

  coin95 = createSprite(100,210, 0, 0);
  coin95.addImage(coinImg);
  coin95.scale = 0.05;

  coin96 = createSprite(260,210, 0, 0);
  coin96.addImage(coinImg);
  coin96.scale = 0.05;

  coin97 = createSprite(295,210, 0, 0);
  coin97.addImage(coinImg);
  coin97.scale = 0.05;

  coin98 = createSprite(320,210, 0, 0);
  coin98.addImage(coinImg);
  coin98.scale = 0.05;

  coin99 = createSprite(345,210, 0, 0);
  coin99.addImage(coinImg);
  coin99.scale = 0.05;

  coin100 = createSprite(370,210, 0, 0);
  coin100.addImage(coinImg);
  coin100.scale = 0.05;

 

  //creating a maze
  cardboard1 =createSprite(200,30,350,15);
  cardboard1.shapeColor ="green";
  
  cardboard2 =createSprite(30,225,15,300);
  cardboard2.shapeColor ="red";
  
  cardboard3 =createSprite(200,370,350,15);
  cardboard3.shapeColor ="blue";
  
   cardboard4 =createSprite(367,200,15,350);
  cardboard4.shapeColor ="pink";

  cardboard5 =createSprite(200,70,280,15);
  cardboard5.shapeColor ="brown";
  
   cardboard6 =createSprite(70,200,15,250);
  cardboard6.shapeColor ="magenta";

  cardboard7 =createSprite(200,330,280,15);
  cardboard7.shapeColor ="brown";
  
   cardboard8 =createSprite(330,180,15,220);
  cardboard8.shapeColor ="red";

  cardboard9 =createSprite(110,200,15,170);
  cardboard9.shapeColor ="lightblue";
  
   cardboard10 =createSprite(290,200,15,170);
  cardboard10.shapeColor ="yellow";
  
  cardboard11 =createSprite(220,110,150,15);
  cardboard11.shapeColor ="orange";
  
   cardboard12 =createSprite(200,290,190,15);
  cardboard12.shapeColor ="lightgreen";

  cardboard13 =createSprite(150,182,15,80);
  cardboard13.shapeColor ="orange";
  
   cardboard14 =createSprite(250,200,15,110);
  cardboard14.shapeColor ="lightgreen";
  
  cardboard15 =createSprite(200,250,110,15);
  cardboard15.shapeColor ="orange";
  
  cardboard16 =createSprite(200,150,110,15);
  cardboard16.shapeColor ="pink";
  
  cardboard17 =createSprite(200,200,40,40);
  cardboard17.shapeColor ="purple";

  
}

function draw() {
  background("black"); 

  textSize(20);
  fill("white");
  text("Score: " + score, 290,415)

  /*if(keyDown(UP_ARROW)){
    pacman.y = pacman.y -5;
    pacman.changeAnimation("upImg", upImg);
  }

  if(keyDown(DOWN_ARROW)){
    pacman.y = pacman.y +5;
    pacman.changeAnimation("downImg", downImg);
  }

  if(keyDown(LEFT_ARROW)){
    pacman.x = pacman.x -5;
    pacman.changeAnimation("leftImg", leftImg);
  }

  if(keyDown(RIGHT_ARROW)){
    pacman.x = pacman.x +5;
    pacman.changeAnimation("pacmanImg", pacmanImg)
  }*/

  pacman.x = mouseX;
  pacman.y = mouseY;

  if(pacman.isTouching(coin)){
    coin.x = -20;
    score = score+10
  }

  if(pacman.isTouching(coin2)){
    coin2.x = -20;
    score = score+10
  }
  fill("red")

  text(mouseX+"," +mouseY,mouseX,mouseY);
  GhostControl();
  playerCollide();
  TouchingGhost(); 
  
  drawSprites();
  pacmanLives();
  win();
}

function GhostControl(){
  //red ghost
  if(redGhost.isTouching(edges[1])){
    redGhost.velocityY=8;
  }
  if(redGhost.y<50){ 
    redGhost.velocityX=8; 
  } 
  if(redGhost.x>370 ){ 
    redGhost.velocityY=8; 
  } 
  if(redGhost.y>370){ 
    redGhost.velocityX=-8;
  } 
  if(redGhost.x<50){ 
    redGhost.velocityY=-8; 
  }
  
  //blue ghost
  if(BlueGhost.y < 50){
    BlueGhost.velocityX = 8;
  }
  if(BlueGhost.x < 350 && BlueGhost.x > 340){
    BlueGhost.velocityY = 8;
  }
  if(BlueGhost.y < 355 && BlueGhost.y > 345){
    BlueGhost.velocityX = -8;
  }
  if(BlueGhost.x < 50){
    BlueGhost.velocityY = -8;
  }

  //yellow ghost
  if(YellowGhost.y < 80){
    YellowGhost.velocityX = -8;
  }
  if(YellowGhost.x < 90){
    YellowGhost.velocityY = 8;
  }
  if(YellowGhost.y < 310 && YellowGhost.y > 300){
    YellowGhost.velocityX = 8;
  }
  if(YellowGhost.x < 305 && YellowGhost.x > 295){
    YellowGhost.velocityY = -8;
  }

  //green ghost
  if(GreenGhost.y < 280 && GreenGhost.y > 270){
    GreenGhost.velocityX = 7;
  }
  if(GreenGhost.x < 270 && GreenGhost.x > 260){
    GreenGhost.velocityY = -7;
  }
  if(GreenGhost.y < 130 && GreenGhost.y > 115){
    GreenGhost.velocityX = -7;
  }
  if(GreenGhost.x < 130 && GreenGhost.x > 115){
    GreenGhost.velocityY = 7;
  }
  
}
function playerCollide(){
  pacman.collide(edges);
  pacman.collide(cardboard1);
  pacman.collide(cardboard2);
  pacman.collide(cardboard3);
  pacman.collide(cardboard4);
  pacman.collide(cardboard5);
  pacman.collide(cardboard6);
  pacman.collide(cardboard7);
  pacman.collide(cardboard8);
  pacman.collide(cardboard9);
  pacman.collide(cardboard10);
  pacman.collide(cardboard11);
  pacman.collide(cardboard12);
  pacman.collide(cardboard13);
  pacman.collide(cardboard14);
  pacman.collide(cardboard15);
  pacman.collide(cardboard16);
  //pacman.collide(cardboard17);
 

  redGhost.collide(edges);
  redGhost.collide(cardboard1);
  redGhost.collide(cardboard2);
  redGhost.collide(cardboard3);
  redGhost.collide(cardboard4);
  redGhost.collide(cardboard5);
  redGhost.collide(cardboard6);
  redGhost.collide(cardboard7);
  redGhost.collide(cardboard8);
  redGhost.collide(cardboard9);
  redGhost.collide(cardboard10);
  redGhost.collide(cardboard11);
  redGhost.collide(cardboard12);
  redGhost.collide(cardboard13);
  redGhost.collide(cardboard14);
  redGhost.collide(cardboard15);
  redGhost.collide(cardboard16);
  redGhost.collide(cardboard17);
 
  BlueGhost.collide(edges);
  BlueGhost.collide(cardboard1);
  BlueGhost.collide(cardboard2);
  BlueGhost.collide(cardboard3);
  BlueGhost.collide(cardboard4);
  BlueGhost.collide(cardboard5);
  BlueGhost.collide(cardboard6);
  BlueGhost.collide(cardboard7);
  BlueGhost.collide(cardboard8);
  BlueGhost.collide(cardboard9);
  BlueGhost.collide(cardboard10);
  BlueGhost.collide(cardboard11);
  BlueGhost.collide(cardboard12);
  BlueGhost.collide(cardboard13);
  BlueGhost.collide(cardboard14);
  BlueGhost.collide(cardboard15);
  BlueGhost.collide(cardboard16);
  BlueGhost.collide(cardboard17);
  

  GreenGhost.collide(edges);
  GreenGhost.collide(cardboard1);
  GreenGhost.collide(cardboard2);
  GreenGhost.collide(cardboard3);
  GreenGhost.collide(cardboard4);
  GreenGhost.collide(cardboard5);
  GreenGhost.collide(cardboard6);
  GreenGhost.collide(cardboard7);
  GreenGhost.collide(cardboard8);
  GreenGhost.collide(cardboard9);
  GreenGhost.collide(cardboard10);
  GreenGhost.collide(cardboard11);
  GreenGhost.collide(cardboard12);
  GreenGhost.collide(cardboard13);
  GreenGhost.collide(cardboard14);
  GreenGhost.collide(cardboard15);
  GreenGhost.collide(cardboard16);
  GreenGhost.collide(cardboard17);
  

  YellowGhost.collide(edges);
  YellowGhost.collide(cardboard1);
  YellowGhost.collide(cardboard2);
  YellowGhost.collide(cardboard3);
  YellowGhost.collide(cardboard4);
  YellowGhost.collide(cardboard5);
  YellowGhost.collide(cardboard6);
  YellowGhost.collide(cardboard7);
  YellowGhost.collide(cardboard8);
  YellowGhost.collide(cardboard9);
  YellowGhost.collide(cardboard10);
  YellowGhost.collide(cardboard11);
  YellowGhost.collide(cardboard12);
  YellowGhost.collide(cardboard13);
  YellowGhost.collide(cardboard14);
  YellowGhost.collide(cardboard15);
  YellowGhost.collide(cardboard16);
  YellowGhost.collide(cardboard17);
}

function TouchingGhost(){
  if(pacman.isTouching(redGhost) || pacman.isTouching(BlueGhost) || pacman.isTouching(YellowGhost) || pacman.isTouching(GreenGhost)){
    lives = lives-1;
    pacman.x = 10;
    pacman.y = 10;
  }
}

function pacmanLives(){
  if(lives === 3){
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
  }
  if(lives === 2){
    life1.visible = true;
    life2.visible = true;
    life3.visible = false;
  }
  if(lives === 1){
    life1.visible = true;
    life2.visible = false;
    life3.visible = false;
  }
  if(lives === 0){
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
    textSize(50);
    text("Game Over", 50,200);
    redGhost.velocityX = 0;
    redGhost.velocityY = 0;
    BlueGhost.velocityX = 0;
    BlueGhost.velocityY = 0;
    YellowGhost.velocityX = 0;
    YellowGhost.velocityY = 0;
    GreenGhost.velocityX = 0;
    GreenGhost.velocityY = 0;
  }
}

function win(){
  if(pacman.isTouching(cardboard17)){
    textSize(70);
    text("You Win!!", 50,200);
    redGhost.velocityX = 0;
    redGhost.velocityY = 0;
    BlueGhost.velocityX = 0;
    BlueGhost.velocityY = 0;
    YellowGhost.velocityX = 0;
    YellowGhost.velocityY = 0;
    GreenGhost.velocityX = 0;
    GreenGhost.velocityY = 0;
  }
}