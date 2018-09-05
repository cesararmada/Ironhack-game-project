
var background = {
  x: 0,
  y: 0,
  dx: 0.0,
  dy: 0.0,
  width: 1200,
  heigth: 700,
  radius: 5.0,

  tick: function () {
    this.x += this.dx;
    this.y += this.dy;

  },

  render: function () {

    var background = new Image()
    background.src = background1;
    ctx.drawImage(background, this.x, this.y, 1200, 700);

    for (var i = 0; i < 11; i++) {
      for (var j = 0; j < 11; j++) {

        ctx.drawImage(background, this.x - canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x - canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x + canvasWidth * i, this.y - canvasHeight * j, 1200, 700);
        ctx.drawImage(background, this.x + canvasWidth * i, this.y + canvasHeight * j, 1200, 700);
      }
    }

  }
};