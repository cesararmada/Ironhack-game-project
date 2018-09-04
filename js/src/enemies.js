function Enemy(img, x, y, dx, dy ) {
  this.x = x;
  this.y = y;
  this.img = new Image();
  this.img.src = img;
  this.dx = dx;
  this.dy = dy;
  this.tick = function(){
    this.x -= this.dx;
    this.y -= this.dy;
    if (this.x > 11000) {
      this.x = 11000
      this.dx=0
    }
    if (this.x < -11000) {
      this.x = -11000
      this.dx=0
    }
    if (this.y > 6500) {
      this.y = 6500
      this.dy=0
    }
    if (this.y < -6500) {
      this.y = -6500
      this.dy=0
    }
  }

  this.render = function(){
      ctx.drawImage(this.img, this.x, this.y, 70, 70);  
  }
}

