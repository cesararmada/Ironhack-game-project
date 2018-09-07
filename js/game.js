function Game() {
  this.background = new Background(0, 0, 1200, 700);
  this.player = new Player()
}

Game.prototype.loop = function () {
  num = Math.floor(Math.random() * 12000) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  numy = Math.floor(Math.random() * 12000) + 1;
  numy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  this.ticks()
  this.render()
  if (gameOver == true) {
    this.endScreen();
    window.cancelAnimationFrame(this.loop.bind(this))
  } else {
    requestAnimationFrame(this.loop.bind(this))
  };
}

Game.prototype.ticks = function () {
  objArray.forEach(function (obj) {
    obj.tick();
  })
  this.player.tick();
}

Game.prototype.render = function () {

  this.background.render()
  objArray.forEach(function (obj) {
    obj.render();
  })
  this.createEnemies();
  this.updateArray();

  this.player.render();
  if (hit_delay > 0) {
    hit_delay -= 1;
  }
  $('#score').text("Score: " + score);
  $('#coordx').text("X: " + Math.floor(this.player.x));
  $('#coordy').text("Y: " + Math.floor(this.player.y));

}

Game.prototype.updateArray = function () {
  this.player.collisionOccurs();
  bulletArr.forEach(function (bullet) {
    bullet.render();
  });
  bulletArr = bulletArr.filter(function (bullet) {
    return bullet.active;
  })
  bulletArr.forEach(function (bullet) {
    bullet.draw();
  })
  enemies.forEach(function (enemy) {
    enemy.render();
  });

  enemies = enemies.filter(function (enemy) {
    return enemy.active;
  })

  enemies.forEach(function (enemy) {
    enemy.draw();
  })
  fixedEnemies.forEach(function (fixedEnemy) {
    fixedEnemy.render();
  });

  fixedEnemies = fixedEnemies.filter(function (fixedEnemy) {
    return fixedEnemy.active;
  })

  fixedEnemies.forEach(function (fixedEnemy) {
    fixedEnemy.draw();
  })

}

Game.prototype.createEnemies = function () {

  if (Math.random() < 0.8) {
    enemies.push(new Enemy(this));
  }

}
Game.prototype.fixedEnemiesCreator = function () {
  for (var i = 0; i < 20; i++) {
    fixedEnemies.push(new FixedEnemy(ufoSrc, -3000 - i * 100, -1000, 600, 6, "square", -3000, -1000))
    fixedEnemies.push(new FixedEnemy(ufoSrc, -6000 - i * 100, 3000, 400, 5, "square", -6000, 3000))
    fixedEnemies.push(new FixedEnemy(ufoSrc, 2000 - i * 100, 2000, 400, 7, "square", 2000, 2000))
    fixedEnemies.push(new FixedEnemy(ufoSrc, 6000 - i * 100, -3000, 900, 5, "square", 6000, -3000))
    fixedEnemies.push(new FixedEnemy(ufoSrc, 9000 - i * 100, 0, 500, 1, "square", 9000, 0))
    fixedEnemies.push(new FixedEnemy(greenUfoSrc, -900, 0, 300, i, "circle"));
    fixedEnemies.push(new FixedEnemy(greenUfoSrc, 7000, 1500, 600, i, "circle"));
    fixedEnemies.push(new FixedEnemy(greenUfoSrc, -2000, 4000, 450, i, "circle"));
    fixedEnemies.push(new FixedEnemy(greenUfoSrc, 10000, -4000, 800, i, "circle"));
    fixedEnemies.push(new FixedEnemy(greenUfoSrc, -10000, 6000, 750, i, "circle"));
  }
}
Game.prototype.objectCreator = function () {
  objArray.push(new ObjectConstr(10000, 5000, 2800, 2000, 0.1, blackHoleSrc))
  objArray.push(new ObjectConstr(-10000, 5000, 2000, 2000, 0.1, blackHoleSrc))
  objArray.push(new ObjectConstr(-5000, -2000, 2000, 2000, 0.05, gasPlanetSrc));
  objArray.push(new ObjectConstr(5500, -3000, 2000, 2000, 0.05, bluePlanetSrc));
  objArray.push(new ObjectConstr(0, 0, 2000, 2000, 0, nebulaSrc));
  objArray.push(new ObjectConstr(-7000, 3000, 2000, 2000, 0, asteroidsSrc));
  objArray.push(new ObjectConstr(8000, 1000, 2000, 2000, 0, asteroidsSrc));
  objArray.push(new ObjectConstr(6000, 5000, 2000, 2000, 0, asteroidsSrc));

}

Game.prototype.gameStart = function () {
  enemies = [];
  fixedEnemies = [];
  gameOver = false;
  this.loop();
  this.objectCreator();
  this.fixedEnemiesCreator();
  gameStart = true;
  $('#health-6').removeClass("hidden");
  $('#health-5').removeClass("hidden");
  $('#health-4').removeClass("hidden");
  $('#health-3').removeClass("hidden");
  $('#health-2').removeClass("hidden");
  $('#health-1').removeClass("hidden");
  this.sound = music.play();
  this.sound = music.currentTime = 0;
}
Game.prototype.endScreen = function () {
  this.sound = music.pause();
  this.sound = over.play();
  var end = new Image();
  end.onload = function () {
    ctx.drawImage(end, this.player.x - canvasWidth / 2, this.player.y - canvasHeight / 2, 1200, 700)
  }.bind(this)
  end.src = gameOverImgSrc;
  gameStart = false;
}