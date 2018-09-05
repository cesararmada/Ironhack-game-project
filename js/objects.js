var blackholeObj = {
  x: 8000,
  y: 4000,
  width: 2800,
  heigth: 2000,
  dx: 0.0,
  dy: 0.0,
  angle: 0.0,

  tick: function () {

    this.angle += 0.1;
  },

  render: function () {
    this.img = new Image()
    this.img.src = blackHoleSrc
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.translate(this.width / 2, this.heigth / 2);
    ctx.rotate((this.angle * Math.PI / 180))
    ctx.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
    ctx.restore();


  }
};

var gasPlanetObj = {
  x: -8000,
  y: -2000,
  width: 2000,
  heigth: 2000,
  dx: 0.0,
  dy: 0.0,
  angle: 0.0,

  tick: function () {

    this.angle += 0.05;
  },

  render: function () {
    this.img = new Image()
    this.img.src = gasPlanetSrc;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.translate(this.width / 2, this.heigth / 2);
    ctx.rotate((this.angle * Math.PI / 180))
    ctx.drawImage(this.img, -this.width / 2, -this.heigth / 2, this.width, this.heigth);
    ctx.restore();


  }
};
var nebulaObj = {
  x: 0,
  y: 0,
  width: 2000,
  heigth: 2000,
  dx: 0.0,
  dy: 0.0,
  angle: 0.0,

  // tick: function () {

  //   this.angle += 0.05;
  // },

  render: function () {
    this.img = new Image()
    this.img.src = nebulaSrc;
    // ctx.save();
    // ctx.translate(this.x, this.y);
    // ctx.translate(this.width / 2, this.heigth / 2);
    // ctx.rotate((this.angle * Math.PI / 180))
    ctx.drawImage(this.img, this.x, this.y,this.width,this.heigth);
    // ctx.restore();


  }
};