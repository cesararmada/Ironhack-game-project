var ObjectConstr = function (x, y, width, heigth, angle, img) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.heigth = heigth;
  this.angle = 0.0;
  this.imgscr = img;
  this.rotVel = angle;
};

ObjectConstr.prototype.tick = function () {

  this.angle += this.rotVel;
}

ObjectConstr.prototype.render = function () {
  this.img = new Image()
  this.img.src = this.imgscr;
  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.translate(this.width / 2, this.heigth / 2);
  ctx.rotate((this.angle * Math.PI / 180))
  ctx.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
  ctx.restore();

}

