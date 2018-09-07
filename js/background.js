function Background(x, y, width, heigth) {
  this.x = x;
  this.y = y;
  this.dx = 0.0;
  this.dy = 0.0;
  this.width = width;
  this.heigth = heigth;
  
};


Background.prototype.render = function () {
  var backgroundImg = new Image()
  backgroundImg.src = background1;
  ctx.drawImage(backgroundImg, this.x, this.y, 1200, 700);

  for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {

      ctx.drawImage(backgroundImg, this.x - canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
      ctx.drawImage(backgroundImg, this.x - canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
      ctx.drawImage(backgroundImg, this.x + canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
      ctx.drawImage(backgroundImg, this.x + canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
    }
  }
}