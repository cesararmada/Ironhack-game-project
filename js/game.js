var loop = function loop() {
  num = Math.floor(Math.random() * 12000) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  numy = Math.floor(Math.random() * 12000) + 1;
  numy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  background.tick()
  player.tick();
  blackholeObj.tick();
  gasPlanetObj.tick();
  background.render()
  blackholeObj.render();
  gasPlanetObj.render();
  nebulaObj.render();
  player.render();
  bullets();
  createRandomEnemies();
  createFixedEnemies();
  collisionOccurs();
  if (hit_delay > 0) {
    hit_delay -= 1;
  }
  $('#score').text("Score: " + score);
  $('#coordx').text("X: " + Math.floor(player.x));
  $('#coordy').text("Y: " + Math.floor(player.y));




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