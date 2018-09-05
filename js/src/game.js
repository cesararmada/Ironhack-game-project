

var loop = function loop() {
  num = Math.floor(Math.random() * 12000) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  numy = Math.floor(Math.random() * 12000) + 1;
  numy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  background.tick()
  player.tick();
  blackhole.tick();
  background.render()
  blackhole.render();
  player.render();
  bullets();
  requestAnimationFrame(loop);
  createRandomEnemies();
  createFixedEnemies();
  collisionOccurs();
}

window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  loop();
}