function Bullet(dx, dy) {
  this.active = true;
  this.color = "yellow";
  this.width = 5;
  this.height = 20;
  this.x = player.x;
  this.y = player.y;
  this.dx = dx;
  this.dy = dy;
  this.radius = 4.0;
}
Bullet.prototype.inBounds = function () {
  return this.x >= -13000 && this.x <= 13000 &&
    this.y >= -8000 && this.y <= 8000;
};

Bullet.prototype.draw = function () {
  ctx.fillStyle = "green";
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0.0, 2.0 * Math.PI, );
  ctx.fill();
  ctx.stroke();
};

Bullet.prototype.render = function () {
  this.x += this.dx;
  this.y += this.dy
  this.active = this.active && this.inBounds();

};

Bullet.prototype.die = function () {
  this.active = false;
};

var bullets = function () {

  bulletArr.forEach(function (bullet) {
    bullet.render();
  });

  bulletArr = bulletArr.filter(function (bullet) {
    return bullet.active;
  })

  bulletArr.forEach(function (bullet) {
    bullet.draw();
  })
}

window.onmousedown = function (e) {
  var x = mouseX - canvasWidth * 0.5;
  var y = mouseY - canvasHeight * 0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  dx = x * base * 2;
  dy = y * base * 2;
  bulletArr.push(new Bullet(dx, dy));

}