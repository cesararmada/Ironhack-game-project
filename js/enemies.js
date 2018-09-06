function FixedEnemy(img, x, y, distance, vel, type) {
  this.type = type
  this.active = true;
  this.img = new Image();
  this.img.src = img;
  if (this.type == "square") {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
  }
  this.width = 40;
  this.height = 40;
  this.timer = 0;
  this.initialX = x;
  this.initialY = y;
  this.distance = distance;
  this.vel = vel;
  if (this.type == "circle") {
    this.circle = {
      centerX: 250,
      centerY: 250,
      radius: 250,
      angle: 0
    };
    this.x = this.circle.centerX + Math.cos(this.circle.angle) * this.circle.radius;
    this.y = this.circle.centerY + Math.sin(this.circle.angle) * this.circle.radius;
  }
}

FixedEnemy.prototype.inBounds = function () {
  return this.x >= -12000 && this.x <= 12000 &&
    this.y >= -7000 && this.y <= 7000;
};

FixedEnemy.prototype.draw = function () {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};

FixedEnemy.prototype.render = function () {
  if (this.type == "circle") {
    this.circle.angle += 0.05;
    this.x = this.circle.centerX + Math.cos(this.circle.angle) * this.circle.radius;
    this.y = this.circle.centerY + Math.sin(this.circle.angle) * this.circle.radius;
  }
  if (this.type == "square") {
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
  }
};

FixedEnemy.prototype.die = function () {
  this.active = false;
  score += 20;
};

function Enemy(game) {
  this.game = game;
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

Enemy.prototype.render = function () {
  if (Math.abs(this.game.player.y - this.y) < 200) {
    if ((this.game.player.x - this.x) > 0) {
      this.dx = 2;
    } else if ((this.game.player.x - this.x) < 0) {
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