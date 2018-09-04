// function Enemy(img, x, y, dx, dy ) {
//   this.x = x;
//   this.y = y;
//   this.img = new Image();
//   this.img.src = img;
//   this.dx = dx;
//   this.dy = dy;

//   this.tick = function(){
//     console.log(this.x)
//   console.log(this.y)
//     this.x += this.dx;
//     this.y += this.dy;
//     if (this.x > 200) {
//       this.x = 200
//       this.dx=0
//       this.dy=-y;
//     }
//     if (this.x < 100) {
//       this.x = 100
//       this.dx=0
//     }
//     if (this.y > 200) {
//       this.y = 200
//       this.dy=0
//     }
//     if (this.y < 200) {
//       this.y = 200
//       this.dy=0
//     }
//   }

//   this.render = function(){
//       ctx.drawImage(this.img, this.x, this.y, 70, 70);  
//   }

// }


function Enemy() {
  this.active = true;
  this.img = new Image();
  this.img.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/enemyround.png";
  this.x = num;
  this.y = numy;
  this.dx = 0;
  this.dy = 4;
  this.width = 40;
  this.height = 40;
}

Enemy.prototype.inBounds = function () {
  return this.x >= -12000 && this.x <= 12000 &&
    this.y >= -7000 && this.y <= 7000;
};

Enemy.prototype.draw = function () {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  
};

Enemy.prototype.update = function () {
  if (Math.abs(player.y - this.y) < 200) {
    if ((player.x - this.x) > 0) {
      this.dx = 2;
    } else if ((player.x - this.x) < 0) {
      this.dx = -2;
    } else {
      this.dx = 0;
    }
  }
  this.x += this.dx;
  this.y += this.dy;
  this.active = this.active && this.inBounds();
};

Enemy.prototype.die = function () {
  this.active = false;
  score += 10;
};