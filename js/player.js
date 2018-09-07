function Player() {
  this.hp = 6;
  this.vel = true;
  this.getHP = function () {
    return this.hp;
  };
  this.getHit = function () {
    this.hp -= 1;
    hit_delay = 100;
    if (this.getHP() == 5) {
      $('#health-6').addClass("hidden");
    }
    if (this.getHP() == 4) {
      $('#health-5').addClass("hidden");
    }
    if (this.getHP() == 3) {
      $('#health-4').addClass("hidden");
    }
    if (this.getHP() == 2) {
      $('#health-3').addClass("hidden");
    }
    if (this.getHP() == 1) {
      $('#health-2').addClass("hidden");
    }
    if (this.getHP() == 0) {
      $('#health-1').addClass("hidden");
      gameOver = true;

    }
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

Player.prototype.tick = function () {
  if (keys["w"] && keys["space"]) {
    game.player.move()
    game.player.accelerate()
  } else if (keys["w"]) {
    game.player.move();
  }

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
  if (keys["w"] && keys["space"]) {
    this.img.src = playership3;
  } else if (keys["w"]) {
    this.img.src = playership2;
  } else {
    this.img.src = playership1;
  }
  ctx.drawImage(this.img, -35, -35, 70, 70);
  ctx.rotate((-this.angle) - (87 * Math.PI / 180));
  ctx.translate(-this.x + this.dx, -this.y + this.dy);

}

Player.prototype.move = function () {
  this.vel = true
  var x = mouseX - canvasWidth * 0.5;
  var y = mouseY - canvasHeight * 0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  this.dx = -(x * base);
  this.dy = -(y * base);
  this.sound = engine.play();

}

Player.prototype.accelerate = function () {
  base = 20.00;
}

Player.prototype.decelerate = function () {
  base = 10.00;
}

Player.prototype.stop = function () {
  this.vel = false
  var x = mouseX - canvasWidth * 0.5;
  var y = mouseY - canvasHeight * 0.5;
  var l = Math.sqrt(x * x + y * y);
  x = x / l;
  y = y / l;
  if (this.vel == false) {
    var self = this
    setTimeout(function () {
      self.dx = -(x * 8);
      self.dy = -(y * 8);

    }, 80);
  }
  if (this.vel == false) {
    setTimeout(function () {
      self.dx = -(x * 6);
      self.dy = -(y * 6);

    }, 160);
  }
  if (this.vel == false) {
    setTimeout(function () {
      self.dx = -(x * 4);
      self.dy = -(y * 4);

    }, 240);
  }
  if (this.vel == false) {
    setTimeout(function () {
      self.dx = -(x * 2);
      self.dy = -(y * 2);

    }, 320);
  }
  if (this.vel == false) {
    setTimeout(function () {
      self.dx = 0;
      self.dy = 0;

    }, 400);
  }
}


Player.prototype.collisionCheck = function (a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}


Player.prototype.collisionOccurs = function () {
  bulletArr.forEach(function (bullet) {
    enemies.forEach(function (enemy) {
      if (this.collisionCheck(bullet, enemy)) {
        bullet.die();
        enemy.die();
      }
    }.bind(this));
  }.bind(this));

  bulletArr.forEach(function (bullet) {
    fixedEnemies.forEach(function (enemy) {
      if (this.collisionCheck(bullet, enemy)) {
        bullet.die();
        enemy.die();
      }
    }.bind(this));
  }.bind(this));

  enemies.forEach(function (enemy) {
    if (this.collisionCheck(enemy, this)) {
      if (hit_delay === 0) {
        enemy.die();
        this.getHit();
      }
    }
  }.bind(this));

  fixedEnemies.forEach(function (enemy) {
    if (this.collisionCheck(enemy, this)) {
      if (hit_delay === 0) {
        enemy.die();
        this.getHit();
      }
    }
  }.bind(this));
}