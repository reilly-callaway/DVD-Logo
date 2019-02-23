let logo;
let pos;
let vel;

const imgWidth = 156;
const imgHeight = 90;


function setup()
{
  createCanvas(860, 520);
  logo = loadImage("assets/logo.png");
  pos = new p5.Vector(random(0, width-imgWidth), random(0, height-imgHeight));
  vel = new p5.Vector(random(1, 3), random(1, 3));
  tint(random(50, 255), random(50, 255), random(50, 255));
}

function draw()
{
  background(0);

  image(logo, pos.x, pos.y, imgWidth, imgHeight);
  if(pos.y >= height-imgHeight-1 || pos.y <= 1)
  {
    vel.y *= -1;
    tint(random(50, 255), random(50, 255), random(50, 255));
  }
  else if(pos.x >= width-imgWidth-1 || pos.x <= 1)
  {
    vel.x *= -1;
    tint(random(50, 255), random(50, 255), random(50, 255));
  }
  
  pos.x += vel.x;
  pos.y += vel.y;
  
}
