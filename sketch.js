var bullet, wall, thickness;
var speed, weight;
var damage;
var gotThere = false;
var bulletRightEdge, wallLeftEdge;
function setup() {
  createCanvas(3000, 3000)
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 50, 50);
  bulletRightEdge = bullet.x;
  fill(80, 80, 80);
  wall = createSprite(1200, 200, thickness, height / 2);
  wallLeftEdge = wall.x;

}

function draw() {
  background("white");
  bullet.velocityX = speed;
  bullet.x += speed;

  bullet.shapeColor = "black";
  wall.shapeColor = "green";

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

    if (damage > 10) {
      wall.shapeColor = color(255, 0, 0);
    }
    if (damage < 10) {
      wall.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bullet.RightEdge = lbullet.x + lbullet.width) {
    return true;
  }
  return false;
}