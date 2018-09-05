
function FixedEnemy(img, x, y,distance,vel ) {
  this.active = true;
  this.img = new Image();
  this.img.src = img;
  this.x = x;
  this.y = y;
  this.dx = 0;
  this.dy = 0;
  this.width = 40;
  this.height = 40;
  this.timer = 0;
  this.initialX = x;
  this.initialY = y;
  this.distance = distance;
  this.vel = vel;
}

FixedEnemy.prototype.inBounds = function () {
  return this.x >= -12000 && this.x <= 12000 &&
    this.y >= -7000 && this.y <= 7000;
};

FixedEnemy.prototype.draw = function () {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};

FixedEnemy.prototype.update = function () {
  if (this.initialX == this.x && this.y == this.initialY) {
    this.dx = this.vel, this.dy = 0;
  }
  if (this.x == fixedEnemies[0].initialX && this.y == fixedEnemies[0].initialY) {
    this.dx = this.vel, this.dy = 0;
  }
  if (this.x == fixedEnemies[0].initialX + this.distance && this.y == fixedEnemies[0].initialY) {
    this.dx = 0, this.dy = this.vel;
  }
  if (this.y == fixedEnemies[0].initialY + this.distance && this.x == fixedEnemies[0].initialX + this.distance) {
    this.dx = -this.vel, this.dy = 0;  
  }
  if (this.x == fixedEnemies[0].initialX && this.y == fixedEnemies[0].initialY + this.distance) {
    this.dx = 0, this.dy = -this.vel;
  }
  this.x += this.dx;
  this.y += this.dy;
  this.active = this.active && this.inBounds();
};

FixedEnemy.prototype.die = function () {
  this.active = false;
  score += 10;
};

function Enemy() {
  this.active = true;
  this.img = new Image();
  this.img.src = enemyRound;
  this.x = num;
  this.y = numy;
  this.dx = 0;
  this.dy = 4;
  this.width = 40;
  this.height = 40;
}

Enemy.prototype.inBounds = function () {
  return this.x >= -12000 && this.x <= 12000 &&
    this.y >= -7000 && this.y <= 7000;
};

Enemy.prototype.draw = function () {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};

Enemy.prototype.update = function () {
  if (Math.abs(player.y - this.y) < 200) {
    if ((player.x - this.x) > 0) {
      this.dx = 2;
    } else if ((player.x - this.x) < 0) {
      this.dx = -2;
    } else {
      this.dx = 0;
    }
  }
  this.x += this.dx;
  this.y += this.dy;
  this.active = this.active && this.inBounds();
};

Enemy.prototype.die = function () {
  this.active = false;
  score += 10;
};

var createRandomEnemies = function () {
  if (Math.random() < 0.4) {
    enemies.push(new Enemy());
  }
  enemies.forEach(function (enemy) {
    enemy.update();
  });

  enemies = enemies.filter(function (enemy) {
    return enemy.active;
  })

  enemies.forEach(function (enemy) {
    enemy.draw();
  })
}
var createFixedEnemies = function () {
  if (fixedEnemies.length < 10) {
    for (var i = 0; i < 10; i++) {
      fixedEnemies.push(new FixedEnemy(enemyRound, 0 - i * 100, 0,1000,5));
    }
  }
  fixedEnemies.forEach(function (fixedEnemy) {
    fixedEnemy.update();
  });

  fixedEnemies = fixedEnemies.filter(function (fixedEnemy) {
    return fixedEnemy.active;
  })

  fixedEnemies.forEach(function (fixedEnemy) {
    fixedEnemy.draw();
  })
}