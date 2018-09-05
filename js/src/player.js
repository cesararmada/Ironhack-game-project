var player = {
  x: (canvasWidth * 0.5),
  y: (canvasHeight * 0.5),
  dx: 0.0,
  dy: 0.0,
  angle: 0.0,

  tick: function () {
    this.angle = Math.atan2(mouseY - canvasHeight * 0.5, mouseX - canvasWidth * 0.5);
    this.x -= this.dx;
    this.y -= this.dy;
    if (this.x > 11000) {
      this.x = 11000
      this.dx = 0
    }
    if (this.x < -11000) {
      this.x = -11000
      this.dx = 0
    }
    if (this.y > 6500) {
      this.y = 6500
      this.dy = 0
    }
    if (this.y < -6500) {
      this.y = -6500
      this.dy = 0
    }

  },

  render: function () {
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle) + (87 * Math.PI / 180));
    this.img = new Image();
    this.img.src = playership1;
    ctx.drawImage(this.img, -35, -35, 70, 70);
    ctx.rotate((-this.angle) - (87 * Math.PI / 180));
    ctx.translate(-this.x + this.dx, -this.y + this.dy);

  },

  move: function () {
    var x = mouseX - canvasWidth * 0.5;
    var y = mouseY - canvasHeight * 0.5;
    var l = Math.sqrt(x * x + y * y);
    x = x / l;
    y = y / l;
    player.dx = -(x * base);
    player.dy = -(y * base);

  },

  accelerate: function () {
    base = 20.00;
  },

  decelerate: function () {
    base = 10.00;
  },

  stop: function () {
    var x = mouseX - canvasWidth * 0.5;
    var y = mouseY - canvasHeight * 0.5;
    var l = Math.sqrt(x * x + y * y);
    x = x / l;
    y = y / l;
    setTimeout(function () {
      player.dx = -(x * 8);
      player.dy = -(y * 8);
      
    }, 200);
    setTimeout(function () {
      player.dx = -(x * 6);
      player.dy = -(y * 6);
      
    }, 400);
    setTimeout(function () {
      player.dx = -(x * 4);
      player.dy = -(y * 4);
      
    }, 600);
    setTimeout(function () {
      player.dx = -(x * 2);
      player.dy = -(y * 2);
      
    }, 800);
    setTimeout(function () {
      player.dx = 0;
      player.dy = 0;
      
    }, 1000);


  }
};
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 87:
      player.move();
      break;
    case 32:
      player.accelerate();
      break;

  }
};
document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 87:
      player.stop();
      break;
    case 32:
      player.decelerate();
      break;

  }
};

window.onmousemove = function (e) {
  mouseX = e.clientX - bounds.left;
  mouseY = e.clientY - bounds.top;
}