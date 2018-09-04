var picture = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/spaceship_sprite.png"

var ship1 = new Enemy(picture, 100, 100, 1, 1, )

var loop = function loop() {
  num = Math.floor(Math.random() * 12000) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  numy = Math.floor(Math.random() * 12000) + 1;
  numy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  background.tick()
  bullet.tick();
  player.tick();
  // ship1.tick();
  blackhole.tick();
  background.render()
  blackhole.render();
  bullet.render();
  // ship1.render();
  player.render();
  requestAnimationFrame(loop);

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

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  loop();
}