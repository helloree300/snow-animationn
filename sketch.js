var snow =[]

function preload(){
  bgImg= loadImage ("images/bgImg.jpeg");
}

function setup() {
  createCanvas(900,900);
  
}

function draw() {
  background(bgImg); 
  
  if (frameCount %60 === 0) 
  {
    snow.push(new Snowflake(random(width/2-30, width/2+30),10,10));
  }

  for (var k = 0; k < snow.length; k++) {
    Snowflake[k].display();
  }


  drawSprites();
}
