window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");
  
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 1200, 700)


  window.onmousedown = function (e) {
    var x = mouseX - canvasWidth * 0.5;
    var y = mouseY - canvasHeight * 0.5;
    var l = Math.sqrt(x * x + y * y);
    x = x / l;
    y = y / l;
    dx = x * base * 2;
    dy = y * base * 2;
    bulletArr.push(new Bullet(dx, dy, game));

  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 87:
        game.player.move();
        break;
      case 32:
        game.player.accelerate();
        break;
      case 13:
      
        if (gameStart == false) {
          main.game = new Game;
          game.gameStart()
          ctx.setTransform(1, 0, 0, 1, 0, 0)
        };
        break;

    }
  };
  document.onkeyup = function (e) {
    switch (e.keyCode) {
      case 87:
        game.player.stop();
        break;
      case 32:
        game.player.decelerate();
        break;

    }
  };

  window.onmousemove = function (e) {
    mouseX = e.clientX - bounds.left;
    mouseY = e.clientY - bounds.top;
  }


}