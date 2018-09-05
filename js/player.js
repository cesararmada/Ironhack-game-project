var player = new Player()

function Player() {
  var HP = 3;
  var dmg = 1;

  this.getHP = function () {
    return HP;
  };
  this.getHit = function () {
    HP -= 1;
    hit_delay = 100;
    if (this.getHP()==2){$('#health-3').addClass("hidden"); console.log("ok")}
    if (this.getHP()==1){$('#health-2').addClass("hidden");}
    if (this.getHP()==0){$('#health-1').addClass("hidden");}
  };

  this.active = true;
  this.width = 70;
  this.height = 70;
  this.x = (canvasWidth * 0.5)
  this.y = (canvasHeight * 0.5);
  this.dx = 0.0;
  this.dy = 0.0;
  this.angle = 0.0;
}

Player.prototype.draw = function () {
  if (hit_delay > 0) {
    if (Math.sin(hit_delay) > 0) {
      ctx.fillStyle = "red";
    } else {
      ctx.fillStyle = this.color;
    }
  } else {
    ctx.fillStyle = this.color;
  }
  ctx.fillRect(this.x, this.y, this.width, this.height);
};


Player.prototype.tick = function () {
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

}

Player.prototype.render = function () {
  ctx.translate(this.x, this.y);
  ctx.rotate((this.angle) + (87 * Math.PI / 180));
  this.img = new Image();
  this.img.src = playership1;
  ctx.drawImage(this.img, -35, -35, 70, 70);
  ctx.rotate((-this.angle) - (87 * Math.PI / 180));
  ctx.translate(-this.x + this.dx, -this.y + this.dy);

}

Player.prototype.move = function () {
  var x = mouseX - canvasWidth * 0.5;
  var y = mouseY - canvasHeight * 0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  player.dx = -(x * base);
  player.dy = -(y * base);

}

Player.prototype.accelerate = function () {
  base = 20.00;
}

Player.prototype.decelerate = function () {
    base = 10.00;
  },

  Player.prototype.stop = function () {
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