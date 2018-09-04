var blackhole = {
  x: 8000,
  y: 2000,
  width:2800,
  heigth:2000,
  dx: 0.0,
  dy: 0.0,
  angle: 0.0,

  tick: function () {
   
    this.angle += 0.1;
  },

  render: function () {
    var blackHole = new Image()
    blackHole.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/Black_Hole.png"
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.translate(this.width/2, this.heigth/ 2);
    ctx.rotate((this.angle * Math.PI / 180))
    ctx.drawImage(blackHole, -this.width/2, -this.heigth/2,this.width,this.heigth);
    ctx.restore();

    
  }
};