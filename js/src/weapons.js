var bullet = {
  x: (canvasWidth * 0.5) | 0,
  y: (canvasHeight * 0.5) | 0,
  dx: 0.0,
  dy: 0.0,
  radius: 5.0,

  tick: function () {
    this.x += this.dx;
    this.y += this.dy;
  },

  render: function () {
    ctx.fillStyle = "darkcyan";
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0.0, 2.0 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
  }
};



window.onmousedown = function (e) {
  var x = mouseX - canvasWidth*0.5;
  var y = mouseY - canvasHeight*0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  bullet.x = player.x;
  bullet.y = player.y;
  bullet.dx = x * base*2;
  bullet.dy = y * base*2;
}