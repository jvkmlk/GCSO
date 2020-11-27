var wall1, car1;

function setup() {
  createCanvas(1920,969);
  wall1 = createSprite(1600, 150, 50, 200);
  wall1.shapeColor = "grey";

  wall2 = createSprite(320, 400, 50, 200);
  wall2.shapeColor = "grey";

  wall3 = createSprite(1600, 650, 50, 200);
  wall3.shapeColor = "grey";

  car1 = createSprite(20, 150,50,50);
  car1.shapeColor = "white";

  car2 = createSprite(1900, 400,50,50);
  car2.shapeColor = "white";

  car3 = createSprite(20, 650,50,50);
  car3.shapeColor = "white";
 
  car1.velocityX=+90;
  car2.velocityX=-90;
  car3.velocityX=+90;



}

function draw() {
  background("black");  

  if ( car1.x - wall1.x < wall1.width/1 +  car1.width/1
      && wall1.x -  car1.x < wall1.width/2 +  car1.width/1) {
        car1.velocityX =  car1.velocityX * (0);
        car1.shapeColor="red";
        wall1.velocityX = wall1.velocityX * (-1);
  }
 
  
  if ( car2.x - wall2.x < wall2.width/1 +  car2.width/1
    && wall2.x -  car2.x < wall2.width/2 +  car2.width/1) {
      car2.velocityX =  car2.velocityX * (0);
      car2.shapeColor="green";
      wall2.velocityX = wall2.velocityX * (-1);
}
if ( car3.x - wall3.x < wall3.width/1 +  car3.width/1
  && wall3.x -  car3.x < wall3.width/2 +  car3.width/1) {
    car3.velocityX =  car3.velocityX * (0);
    car3.shapeColor="blue";
    wall3.velocityX = wall3.velocityX * (-1);
}
  drawSprites();
}