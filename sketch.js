function setup() {
  createCanvas(400, 400);
  creatEdgeSprite ();
  
  
  
  astronaut = creatSprite(300,300);
  astronaut .addAnimation("sleeping",sleep);
  astronaut .scale = 0.1;




}

function draw() {
  background(220);

function preload(){
bg=loadImage(image/iss.png);
sleep=loadImage(image/sleep.png);
brus=loadImage(image/brush.png);
gym=loadImage(image/gym1.png,gym2.png,gym11.png,gym12.png);
drink=loadImage(image/drink1.png,drink2.png);
move=loadImage(image/move.png,move1.png);
bath=loadImage(image/bath1.png,bath2.png);
}
if (keyDown("UP_ARROW")){
astronaut.addAnimation("brushing",brush);
astronaut .changeAnimation("brushing");
astronaut .y = 350;
astronaut .velocityX = 0;
astronaut .velocityY = 0;
}
if (keyDown("DOWN_ARROW"){
astronaut.addAnimation("gymming" ,gym);
astronaut .changeAnimation("gymming");
astronaut .y = 300;
astronaut .velocityX =-0;
astronaut .velocityY =-0;
}
if (keyDown("LEFT_ARROW"){
  astronaut.addAnimation("eating" ,eat);
  astronaut .changeAnimation("eating");
  astronaut .y = 250;
  astronaut .velocityX =0;
  astronaut .velocityY =0;
  }
  if (keyDown("RIGHT_ARROW"){
    astronaut.addAnimation("bathing" ,bath);
    astronaut .changeAnimation("bathing");
    astronaut .y = 200;
    astronaut .velocityX =-0;
    astronaut .velocityY =-0;
    }
    if (keyDown("M"){
      astronaut.addAnimation("moving" ,move);
      astronaut .changeAnimation("moving");
      astronaut .y = 150;
      astronaut .velocityX =0;
      astronaut .velocityY =0;
    }










}


















}