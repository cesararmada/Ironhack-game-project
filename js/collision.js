function collisionCheck(a, b) {
  return a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y;
}

function collisionOccurs() {
  bulletArr.forEach(function (bullet) {
    enemies.forEach(function (enemy) {
      if (collisionCheck(bullet, enemy)) {
        bullet.die();
        enemy.die();
      }
    });
  });

  bulletArr.forEach(function (bullet) {
    fixedEnemies.forEach(function (enemy) {
      if (collisionCheck(bullet, enemy)) {
        bullet.die();
        enemy.die();
      }
    });
  });

  enemies.forEach(function (enemy) {
    if (collisionCheck(enemy, player)) {
      if (hit_delay === 0) {
        enemy.die();
        player.getHit();
      }
    }
  });

  fixedEnemies.forEach(function (enemy) {
    if (collisionCheck(enemy, player)) {
      if (hit_delay === 0) {
        enemy.die();
        player.getHit();
      }
    }
  });
}