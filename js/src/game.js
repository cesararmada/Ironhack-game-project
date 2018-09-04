var picture = "/Users/cesar/code/Ironhack/project-1-Game/Traveller/img/spaceship_sprite.png"

var ship1 = new Enemy(picture,0,0,1,1,)

function loop() {
  background.tick()
  bullet.tick();
  player.tick();
  ship1.tick();
  blackhole.tick();
  background.render()
  blackhole.render();
  bullet.render();
  ship1.render();
  player.render();
  requestAnimationFrame(loop);
}

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  loop();
}

