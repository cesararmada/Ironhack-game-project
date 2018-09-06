window.onload = function () {
  canvas = document.getElementById("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  bounds = canvas.getBoundingClientRect();
  ctx = canvas.getContext("2d");

  
  var game = new Game;
  
  game.loop();
  game.objectCreator();

  window.onmousedown = function (e) {
    var x = mouseX - canvasWidth * 0.5;
    var y = mouseY - canvasHeight * 0.5;
    var l = Math.sqrt(x * x + y * y);
    x = x / l;
    y = y / l;
    dx = x * base * 2;
    dy = y * base * 2;
    bulletArr.push(new Bullet(dx, dy,game));

  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 87:
        game.player.move();
        break;
      case 32:
        game.player.accelerate();
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
