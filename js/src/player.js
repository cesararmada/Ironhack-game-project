var player = {
  x: (canvasWidth * 0.5),
  y: (canvasHeight * 0.5),
  dx: 0.0,
  dy: 0.0,

  angle: 0.0,
  // radius: 0,

  tick: function () {
    this.angle = Math.atan2(mouseY - canvasHeight*0.5, mouseX - canvasWidth*0.5);
    console.log(this.angle)
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
    
  },

  render: function () {
    ctx.translate(this.x, this.y);
    ctx.rotate((this.angle) + (87 * Math.PI / 180));
    this.img = new Image();
    this.img.src = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/spaceship_sprite.png";
    ctx.drawImage(this.img, -35, -35, 70, 70);
    ctx.rotate((-this.angle) - (87 * Math.PI / 180));
    ctx.translate(-this.x+this.dx, -this.y+this.dy);
    
  }
};

function move() {
  var x = mouseX - canvasWidth*0.5;
  var y = mouseY - canvasHeight*0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  player.dx = -(x * base);
  player.dy = -(y * base);

}

function accelerate() {
  base = 20.00;
}

function decelerate() {
  base = 10.00;
}

function stop() {
  
  player.dx=0
  player.dy=0
  // setTimeout(function () {
  //   background.dx = -(x * 8);
  //   background.dy = -(y * 8);
  // }, 200);
  // setTimeout(function () {
  //   background.dx = -(x * 7);
  //   background.dy = -(y * 7);
  // }, 400);
  // setTimeout(function () {
  //   background.dx = -(x * 6);
  //   background.dy = -(y * 6);
  // }, 600);
  // setTimeout(function () {
  //   background.dx = -(x * 5);
  //   background.dy = -(y * 5);
  // }, 800);
  // setTimeout(function () {
  //   background.dx = -(x * 4);
  //   background.dy = -(y * 4);
  // }, 1000);
  // setTimeout(function () {
  //   background.dx = -(x * 3);
  //   background.dy = -(y * 3);
  // }, 1200);
  // setTimeout(function () {
  //   background.dx = -(x * 2);
  //   background.dy = -(y * 2);
  // }, 1400);
  // setTimeout(function () {
  //   background.dx = -(x * 1);
  //   background.dy = -(y * 1);
  // }, 1600);
  // setTimeout(function () {
  //   background.dx = 0;
  //   background.dy = 0;
  // }, 1800);

}
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 87:
      move();
      break;
    case 32:
      accelerate();
      break;

  }
};
document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 87:
      stop();
      break;
    case 32:
      decelerate();
      break;

  }
};

window.onmousemove = function (e) {
  mouseX = e.clientX - bounds.left;
  mouseY = e.clientY - bounds.top;
}