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


  requestAnimationFrame(this.loop.bind(this));
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

  var max = 20 - fixedEnemies.length
  if (fixedEnemies.length < 20) {
    for (var i = 0; i <= max; i++) {
      fixedEnemies.push(new FixedEnemy(ufoSrc, -3000 - i * 100, -1000, 600, 5, "square"))
      fixedEnemies.push(new FixedEnemy(greenUfoSrc, 0 - i * 100, 0, 1000, 5, "circle"));
    }
  }


}

Game.prototype.objectCreator = function () {
  objArray.push(new ObjectConstr(7000, 4000, 2800, 2000, 0.1, blackHoleSrc))
  objArray.push(new ObjectConstr(-7000, -2000, 2000, 2000, 0.05, gasPlanetSrc));
  objArray.push(new ObjectConstr(0, 0, 2000, 2000, 0, nebulaSrc));

}